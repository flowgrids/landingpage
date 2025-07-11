import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-gray-600 border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* <p className="mb-2 sm:mb-0">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
              </p> */}
        <div className="flex space-x-4">
          <Link
            href="/terms"
            className="hover:text-gray-800 transition-colors duration-200"
          >
            Impressum
          </Link>
          <Link
            href="/privacy"
            className="hover:text-gray-800 transition-colors duration-200"
          >
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </footer>
  );
}
