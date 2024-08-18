"use client";

import Link from "next/link";
import React from "react";
import { Coffee } from "lucide-react";

export default function BuyMeACoffeeButton() {
  return (
    <Link
      href="https://ko-fi.com/jordiluiss"
      className="bg-gradient-to-r from-orange-400 to-orange-500 text-white 
                 hover:from-orange-500 hover:to-orange-600
                 inline-flex items-center gap-2 px-6 py-3 rounded-full
                 shadow-md hover:shadow-lg transition-all duration-300
                 font-semibold text-sm"
      prefetch={false}
    >
      <Coffee className="h-5 w-5" />
      <span>Buy me a coffee</span>
    </Link>
  );
}
