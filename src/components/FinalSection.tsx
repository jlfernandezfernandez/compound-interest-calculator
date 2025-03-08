import Link from "next/link";
import React from "react";

export default function FinalSection() {
  return (
    <section className="text-center border-t border-gray-200 pt-8">
      <h2 className="text-base font-semibold text-gray-800 mb-4">
        Optimiza tus Inversiones
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Descubre herramientas como MyInvestor, Micappital y Revolut para
        potenciar tus estrategias financieras.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          href="/mejora-tus-resultados"
          className="inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300 text-sm font-medium"
        >
          Saber más
        </Link>
        <Link
          href="/about"
          className="inline-block bg-white text-gray-800 py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 text-sm font-medium"
        >
          Sobre este proyecto
        </Link>
      </div>
    </section>
  );
}
