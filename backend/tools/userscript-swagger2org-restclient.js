// ==UserScript==
// @name         Export Swagger to org-mode restclient
// @namespace    http://tampermonkey.net/
// @version      2025-06-08
// @description  Export Swagger API as org-mode restclient with examples, query params, response examples, grouped by tag
// @author       You
// @match        *://*/documentation*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.localhost
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function createStickyButton() {
    const btn = document.createElement("button");
    btn.textContent = "⬇ Export .org";
    Object.assign(btn.style, {
      position: "fixed",
      top: "50%",
      right: "-88px",
      transform: "translateY(-50%)",
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      borderRadius: "6px 0 0 6px",
      cursor: "pointer",
      zIndex: 9999,
      transition: "right 0.3s",
    });

    btn.addEventListener("mouseenter", () => {
      btn.style.right = "0px";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.right = "-88px";
    });

    btn.addEventListener("click", exportOrgFile);

    document.body.appendChild(btn);
  }

  function formatPlaceholder(schema) {
    if (!schema) return "<param>";
    if (schema.type === "number" || schema.type === "integer") return "0";
    if (schema.pattern) return schema.pattern;
    if (schema.enum && schema.enum.length > 0) return schema.enum[0];
    return "example" in schema ? schema.example : "string";
  }

  function getExampleRequestBody(content) {
    const json = content?.["application/json"];
    if (json?.example) {
      return JSON.stringify(json.example, null, 2);
    }
    if (json?.examples) {
      const firstKey = Object.keys(json.examples)[0];
      return JSON.stringify(json.examples[firstKey].value, null, 2);
    }
    return "";
  }

  function getExampleResponseBody(responses) {
    const keys = Object.keys(responses);
    const key = keys.find((k) => k.startsWith("2")) || keys[0];
    const content = responses[key]?.content?.["application/json"];
    if (!content) return "";
    if (content.example) return JSON.stringify(content.example, null, 2);
    if (content.examples) {
      const example = Object.values(content.examples)[0];
      return JSON.stringify(example.value, null, 2);
    }
    return "";
  }

  function exportOrgFile() {
    const spec = ui?.getConfigs?.().spec;
    if (!spec || !spec.paths) {
      alert("❌ Swagger spec not found.");
      return;
    }

    const baseUrl = location.origin;
    const grouped = {};

    for (const [path, methods] of Object.entries(spec.paths)) {
      for (const [method, details] of Object.entries(methods)) {
        const tag =
          (details.tags && details.tags[0]) || path.split("/")[1] || "API";
        if (!grouped[tag]) grouped[tag] = [];

        const fullPath = path;
        let formattedPath = path;
        const vars = [];
        const queryVars = [];

        // Path variables
        (details.parameters || []).forEach((param) => {
          if (param.in === "path") {
            const name = param.name;
            formattedPath = formattedPath.replace(`{${name}}`, `:${name}`);
            vars.push(`${name}="${formatPlaceholder(param.schema)}"`);
          }
          if (param.in === "query") {
            queryVars.push({
              name: param.name,
              placeholder: formatPlaceholder(param.schema),
            });
            vars.push(`${param.name}=${formatPlaceholder(param.schema)}`);
          }
        });

        if (queryVars.length > 0) {
          const queryString = queryVars
            .map((q) => `${q.name}=:${q.name}`)
            .join("&");
          formattedPath += `?${queryString}`;
        }

        const headline = `** ${method.toUpperCase()} ${fullPath}`;
        let block = "";
        if (details.summary) {
          block += `${details.summary}\n\n`;
        }

        const varLine = vars.length ? " :var " + vars.join(" :var ") : "";
        block += `#+begin_src restclient${varLine}\n`;
        block += `${method.toUpperCase()} ${baseUrl}${formattedPath}\n`;
        block +=
          "Content-Type: application/json\nAuthorization: Bearer :bearer\n";

        // Example request body
        const body = getExampleRequestBody(details.requestBody?.content);
        if (body) block += `\n${body}\n`;

        block += "#+end_src\n";

        // Example response
        const responseExample = getExampleResponseBody(details.responses);
        if (responseExample) {
          block += `\n#+RESULTS:\n#+begin_example\n${responseExample}\n#+end_example\n`;
        }

        grouped[tag].push(`${headline}\n${block}`);
      }
    }

    let content =
      '#+title: Restclient\n#+PROPERTY: header-args:restclient :var api=""\n#+STARTUP: hideblocks\n#+STARTUP: overview\n\n';
    content =
      content +
      Object.entries(grouped)
        .map(([tag, blocks]) => {
          return `* ${tag}\n\n${blocks.join("\n")}`;
        })
        .join("\n");

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "restclient.org";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  const waitForSwagger = setInterval(() => {
    if (typeof ui !== "undefined" && ui.getConfigs && ui.getConfigs().spec) {
      clearInterval(waitForSwagger);
      createStickyButton();
    }
  }, 1000);
})();
