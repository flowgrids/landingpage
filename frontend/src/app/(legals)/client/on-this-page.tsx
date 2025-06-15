"use client";

import { useEffect, useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";

type Heading = {
  id: string;
  text: string;
  level: number;
  ref: React.RefObject<HTMLElement>;
};

export default function OnThisPage() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname(); // Reload after navigation

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));

    const extracted: Heading[] = headingElements.map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: parseInt(el.tagName.replace("H", "")),
      ref: { current: el as HTMLElement },
    }));

    setHeadings(extracted);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", () => {
    const scrollPosition = window.scrollY + 100; // adjust for header offset

    if (headings && headings.length > 0) {
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i].ref.current;
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveId(heading.id);
          break;
        }
      }
    }
  });

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      className="hidden xl:block w-64 p-4 text-sm border-l border-gray-200 print:hidden"
      ref={containerRef}
    >
      <p className="font-bold mb-2">On this page</p>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id} className={`pl-${(heading.level - 2) * 4}`}>
            <button
              onClick={() => handleClick(heading.id)}
              className={`text-left hover:underline ${
                heading.id === activeId
                  ? "text-blue-700 font-semibold"
                  : "text-blue-600"
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
