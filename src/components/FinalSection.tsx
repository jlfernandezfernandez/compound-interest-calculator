import Link from "next/link";
import React from "react";

export default function FinalSection() {
  return (
    <section
      className="max-w-7xl mx-auto w-full my-8 p-8 bg-gray-50 rounded-2xl shadow-sm"
      aria-labelledby="recommended-tools"
    >
      <h2
        id="recommended-tools"
        className="text-2xl font-semibold text-center text-gray-800 mb-4"
      >
        Herramientas Recomendadas para Inversión Inteligente
      </h2>
      <div className="space-y-4">
        <p className="text-center text-gray-600 leading-relaxed">
          Optimiza tus finanzas e inversiones con las herramientas que uso
          personalmente: <strong>MyInvestor, Micappital y Revolut</strong>.
          Estas plataformas ofrecen soluciones innovadoras para gestionar tu
          patrimonio de manera eficiente.
        </p>
        <p className="text-center text-gray-600 leading-relaxed">
          Explora cómo estas opciones pueden potenciar tus estrategias
          financieras y acelerar el crecimiento de tus inversiones.
        </p>
        <div className="text-center mt-6">
          <Link
            href="/mejora-tus-resultados"
            className="inline-block bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300 font-medium"
          >
            Descubre Estrategias de Inversión Avanzadas
          </Link>
        </div>
      </div>
      <p className="text-center mt-6 text-sm text-gray-500">
        Recuerda: La investigación y las decisiones informadas son cruciales
        para alcanzar tus objetivos financieros.
      </p>
    </section>
  );
}
