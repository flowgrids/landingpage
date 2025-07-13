import React from "react";
import OnThisPage from "../(legals)/client/on-this-page";
import PathAwareTitle from "./client/path-aware-title";

export default function LegalsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start justify-between min-h-screen">
      {/* Left spacer */}
      <div className="flex-1"></div>
      {/* Content */}

      <div className="min-h-screen px-4">
        {/* Title at top, full width */}
        <PathAwareTitle />

        {/* Main content area: content + sidebar */}
        <div className="flex justify-between mt-8">
          {/* Main content */}
          <div
            id="content"
            className="max-w-4xl w-full text-gray-800 dark:text-gray-200"
          >
            {children}
          </div>

          {/* Sidebar with sticky positioning */}
          <div className="w-64 pl-8">
            <div className="sticky top-20">
              <OnThisPage />
            </div>
          </div>
        </div>
      </div>

      {/* Right spacer */}
      <div className="flex-1"></div>
    </div>
  );
}
