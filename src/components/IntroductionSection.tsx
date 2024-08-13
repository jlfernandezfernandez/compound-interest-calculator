import React from "react";

export default function IntroductionSection() {
  return (
    <section
      className="max-w-7xl mx-auto w-full mb-12 text-center"
      aria-labelledby="intro-heading"
    >
      <h1
        id="intro-heading"
        className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
      >
        Calculadora de Interés Compuesto Avanzada
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8">
        Potencia tus inversiones y visualiza tu futuro financiero.
      </p>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 leading-relaxed">
          Descubre el poder del interés compuesto y cómo puede{" "}
          <strong>acelerar el crecimiento de tu patrimonio</strong>. Nuestra
          calculadora te permite simular diversos escenarios de inversión,
          ayudándote a tomar decisiones informadas para un futuro financiero más
          sólido y próspero.
        </p>
      </div>
    </section>
  );
}
