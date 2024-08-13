"use client";

import Link from "next/link";
import React from "react";
import { Coffee } from "lucide-react";

export default function BuyMeACoffeeButton() {
  return (
    <Link
      href="https://ko-fi.com/jordiluiss"
      className="bg-white text-black inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-md"
      prefetch={false}
    >
      <Coffee className="h-5 w-5" />
      Buy me a coffee
    </Link>
  );
}
