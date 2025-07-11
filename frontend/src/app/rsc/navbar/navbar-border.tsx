"use client";

import { HEADER_HEIGHT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export default function NavbarBorder() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check if the user has scrolled down
      if (scrollPosition > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="#navbar-border"
      className={cn(
        "absolute top-0 left-0 right-0 -z-10 transition-colors border-t border-transparent",
        hasScrolled && "border-muted-foreground/20",
      )}
      style={{ marginTop: HEADER_HEIGHT }}
    >
      {/* Navbar content goes here */}
    </div>
  );
}
