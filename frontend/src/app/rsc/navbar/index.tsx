import React from "react";
import Link from "next/link";
import LogoWithText from "./logo-with-text";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" target="_self" replace>
          <LogoWithText />
        </Link>

        {/* Navigation */}
        <nav className="space-x-8 text-sm font-medium text-gray-700">
          <Link href="team/">Team</Link>
        </nav>

        {/* Contact us */}
        <div>
          <Link
            href="mailto:info@flowgrids.de"
            className="text-sm font-medium text-gray-900 hover:underline"
          >
            Contact us →
          </Link>
        </div>
      </div>
    </header>
  );
}
