"use client";

import { useEffect, useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    const scrollPosition = window.scrollY; // + HEADER_HEIGHT;

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

  return (
    <aside
      className="hidden xl:flex flex-col w-64 p-4 text-sm border-l border-gray-200 print:hidden"
      ref={containerRef}
    >
      <p className="font-bold mb-2">On this page</p>
      <ul className="flex flex-col gap-4">
        {headings.map((heading) => (
          <li key={heading.id} className={`pl-${(heading.level - 2) * 4}`}>
            <Link
              href={`#${heading.id}`}
              className={cn(
                "text-left hover:underline",
                heading.id === activeId
                  ? "text-blue-700 font-semibold"
                  : "text-muted-foreground",
              )}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
