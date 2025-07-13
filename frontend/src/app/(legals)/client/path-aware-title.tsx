"use client";

import { usePathname } from "next/navigation";
import PrivacyTitle from "../privacy/title";
import TermsTitle from "../terms/title";
import { JSX } from "react";

export default function PathAwareTitle() {
  const pathname = usePathname();

  const titleComponents: Record<string, JSX.Element> = {
    "/privacy": <PrivacyTitle />,
    "/terms": <TermsTitle />,
  };

  return <div>{titleComponents[pathname] ?? <h1>Title</h1>}</div>;
}
