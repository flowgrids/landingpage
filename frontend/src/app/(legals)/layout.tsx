import React from "react";
import OnThisPage from "../(legals)/client/on-this-page";

export default function LegalsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start justify-between min-h-screen">
      <div className="flex-1"></div>
      <div id="content" className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
        {children}
      </div>
      <div className="flex-1 sticky top-20">
        <OnThisPage />
      </div>
    </div>
  );
}
