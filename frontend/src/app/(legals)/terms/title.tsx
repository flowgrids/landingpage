"use client";

import React from "react";

export default function TermsTitle() {
  return (
    <div>
      <h1 id="impressum" className="text-4xl font-bold mb-6 text-center">
        Impressum
      </h1>
      <div
        id="preamble"
        className="flex justify-center text-sm my-8 border-t pt-4"
      >
        <p className="date text-gray">Letzter Stand: Juni 2025</p>
      </div>
    </div>
  );
}
