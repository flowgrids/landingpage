import React from "react";
import SideTOC from "../(legals)/components/rsc/sidetoc";
import OnThisPage from "../(legals)/components/client/on-this-page";

export default function LegalsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <OnThisPage />
      {children}
    </div>
  );
}
