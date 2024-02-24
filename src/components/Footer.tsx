import React from 'react';
import BuyMeACoffeeButton from "./BuyMeACoffeButton";

export default function Footer() {
    return (
        <footer className="border-t bg-white text-gray-500 py-3 px-4">
        <nav className="flex items-center justify-between max-w-3xl mx-auto space-x-4 text-sm">
          <BuyMeACoffeeButton/>
          <span>2024</span>
        </nav>
      </footer>
    )
}
