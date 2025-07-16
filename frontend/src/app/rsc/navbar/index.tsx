import React from "react";
import Link from "next/link";
import LogoWithText from "./logo-with-text";
import ThemeToggleGroup from "@/components/client/theme-toggle-group";
import NavbarBorder from "./navbar-border";
import MobileMenu from "./client/mobile-menu";
import navigationMenuItems from "@/app/navigation-menu-items";

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
        <nav className="hidden md:block space-x-8 text-sm font-medium text-gray-700 dark:text-gray-200">
          {navigationMenuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Theming */}
        <div className="hidden md:block">
          <ThemeToggleGroup />
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <MobileMenu />
        </div>

        {/* Dynamic Border */}
        <NavbarBorder />
      </div>
    </header>
  );
}
