// components/CTASection.tsx
import React from "react";
import Link from "next/link";

const CTASection = () => (
  <section className="text-center border-t border-gray-200 pt-8">
    <h2 className="text-base font-semibold text-gray-800 mb-4">
      ¿Listo para comenzar tu propio viaje de inversión?
    </h2>
    <Link
      href="/calculadora-interes-compuesto"
      className="inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300 text-sm font-medium"
    >
      Simula tu interés compuesto
    </Link>
  </section>
);

export default CTASection;
