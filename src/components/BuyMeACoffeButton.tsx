"use client";

import Link from "next/link";
import React from "react";
import { Coffee } from "lucide-react";

export default function BuyMeACoffeeButton() {
  return (
    <Link
      href="https://ko-fi.com/jordiluiss"
      className="border-2 border-black  bg-white text-black hover:bg-gray-100 inline-flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300"
      prefetch={false}
    >
      <Coffee className="h-5 w-5" />
      Buy me a coffee
    </Link>
  );
}
