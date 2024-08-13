// components/Footer.tsx

import React from "react";
import BuyMeACoffeeButton from "./BuyMeACoffeButton";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <BuyMeACoffeeButton />
          <span className="text-sm text-gray-500">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
