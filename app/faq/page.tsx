"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Faq() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-lg mb-2">When is the next membership intake?</p>
      <p className="text-md mb-2">
        The next intake will open from 1 May 2025 to 31 May 2025
      </p>
    </div>
  );
}
