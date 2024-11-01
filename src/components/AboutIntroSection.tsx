// components/AboutIntroSection.tsx
import React from "react";
import Link from "next/link";

const AboutIntroSection: React.FC = () => {
  return (
    <section
      className="text-center mb-14"
      aria-labelledby="about-intro-heading"
    >
      <h1
        id="about-intro-heading"
        className="text-2xl sm:text-3xl font-bold mb-4"
      >
        Gana con Interés: Tu Compañero de Inversiones 📈
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Calcula y visualiza el poder del interés compuesto en tus inversiones de
        forma gratuita y sencilla. Ideal para fondos de inversión, cuentas
        remuneradas y planes de pensiones.
      </p>
      <Link
        href="/calculadora-interes-compuesto"
        className="inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300 font-medium"
      >
        Empieza a Calcular Tus Ganancias
      </Link>
    </section>
  );
};

export default AboutIntroSection;
