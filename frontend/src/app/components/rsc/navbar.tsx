import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-indigo-600 font-bold text-xl">
          <Link href="/" target="_self" replace>
            <Image
              src="/flowgrids-logo.svg"
              alt="Logo"
              width="200"
              height="200"
              className="inline-block mr-2"
            />
          </Link>
        </div>

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
