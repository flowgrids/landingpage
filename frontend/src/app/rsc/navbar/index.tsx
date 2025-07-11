import React from "react";
import Link from "next/link";
import LogoWithText from "./logo-with-text";
import ThemeToggleGroup from "@/components/client/theme-toggle-group";
import NavbarBorder from "./navbar-border";

export default function Navbar({ height = "4rem" }: { height: string }) {
  return (
    <header>
      <div
        className="mx-auto max-w-7xl px-6 flex items-center justify-between flex items-center"
        style={{ height: height }}
      >
        {/* Logo */}
        <Link href="/" target="_self" replace>
          <LogoWithText size={30} />
        </Link>

        {/* Navigation */}
        <nav className="space-x-8 text-sm font-medium text-gray-700 dark:text-gray-200">
          <Link href="/#team">Team</Link>
        </nav>

        {/* Contact us */}
        <div>
          <ThemeToggleGroup />
          {/* <Link
              href="mailto:info@flowgrids.de"
              className="text-sm font-medium text-gray-900 hover:underline"
              >
              Contact us →
              </Link> */}
        </div>
        <NavbarBorder />
      </div>
    </header>
  );
}
