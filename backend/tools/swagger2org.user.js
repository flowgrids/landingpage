// ==UserScript==
// @name         Export Swagger to org-mode restclient
// @namespace    http://tampermonkey.net/
// @version      2025-06-08
// @description  Export Swagger API as org-mode restclient with examples and response examples, grouped by tag
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

  function formatDefault(param) {
    if (param?.schema?.default !== undefined) return param.schema.default;
    if (param?.default !== undefined) return param.default;
    return param?.name || "<value>";
  }

  function extractExampleBody(requestBody) {
    if (!requestBody) return null;
    const content = requestBody.content?.["application/json"];
    if (!content) return null;

    if (content.example) return JSON.stringify(content.example, null, 2);
    if (content.examples) {
      const exampleKey = Object.keys(content.examples)[0];
      return JSON.stringify(content.examples[exampleKey].value, null, 2);
    }
    return null;
  }

  function extractResponseExample(responses) {
    const response = responses["200"] || responses["201"];
    const content = response?.content?.["application/json"];
    if (!content) return null;

    if (content.example) return JSON.stringify(content.example, null, 2);
    if (content.examples) {
      const exampleKey = Object.keys(content.examples)[0];
      return JSON.stringify(content.examples[exampleKey].value, null, 2);
    }
    return null;
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

        const summary = details.summary;
        const originalPath = path;
        let formattedPath = path;
        const vars = [];

        // Replace path parameters and collect defaults
        (details.parameters || []).forEach((param) => {
          if (param.in === "path") {
            const val = formatDefault(param);
            formattedPath = formattedPath.replace(
              `{${param.name}}`,
              `:${param.name}`,
            );
            vars.push(`${param.name}=${val}`);
          }
        });

        // Request body
        const requestBody = extractExampleBody(details.requestBody);
        const hasBody = !!requestBody;

        // Response example
        const responseExample = extractResponseExample(details.responses);

        let block = `** ${method.toUpperCase()} ${originalPath}\n`;
        if (summary) block += `${summary}\n\n`;

        const varLine = vars.length ? " :var " + vars.join(" :var ") : "";
        block += `#+begin_src restclient${varLine}\n`;
        block += `${method.toUpperCase()} ${baseUrl}${formattedPath}\n`;
        block += `Content-Type: application/json\nAuthorization: Bearer :bearer\n`;

        if (hasBody) {
          block += `\n${requestBody}\n`;
        }

        block += `#+end_src\n`;

        if (responseExample) {
          block += `\n#+begin_src json :exports code :results silent\n${responseExample}\n#+end_src\n`;
        }

        grouped[tag].push(block);
      }
    }

    const metadata = `# -*- eval: (progn (setenv "NODE_PATH" "./node_modules")); -*-\n#+TITLE: Restclient\n#+PROPERTY: header-args:restclient :var bearer="YOUR-BEARER-TOKEN"\n#+STARTUP: hideblocks\n#+STARTUP: overview\n\n`;
    const content =
      metadata +
      Object.entries(grouped)
        .map(([tag, blocks]) => {
          return `* ${tag}\n\n${blocks.join("\n")}`;
        })
        .join("\n");

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "restclient.example.org";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Wait until Swagger UI loads
  const waitForSwagger = setInterval(() => {
    if (typeof ui !== "undefined" && ui.getConfigs && ui.getConfigs().spec) {
      clearInterval(waitForSwagger);
      createStickyButton();
    }
  }, 1000);
})();
