// components/Footer.tsx

import React from "react";
import BuyMeACoffeeButton from "./BuyMeACoffeButton";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <BuyMeACoffeeButton />
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}
