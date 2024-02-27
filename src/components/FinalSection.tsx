import Link from "next/link";
import React from "react";

export default function FinalSection() {
  return (
    <section className="max-w-6xl mx-auto w-full my-4 p-4 border border-gray-200 rounded-lg shadow-lg ">
      <h2 className="text-xl font-bold text-center text-gray-600">🛠 Mis Herramientas Recomendadas</h2>
      <p className="text-center mt-2 text-gray-500">Utilizo <strong>MyInvestor, Micappital y Revolut</strong> para optimizar mis finanzas e inversiones. 🚀 Considera <Link href="/mejora-tus-resultados" className="text-blue-500 hover:text-blue-700 font-bold">explorar estas opciones</Link> para potenciar tus necesidades financieras.</p>
      <p className="text-center mt-2 text-gray-500">⚠️ Es crucial investigar y tomar decisiones informadas adaptadas a tus objetivos.</p>
    </section>
  );
}
