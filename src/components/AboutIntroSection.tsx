// components/AboutIntroSection.tsx
import React from "react";
import Button from "./Button";
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
      <p className="text-lg text-gray-700 mb-6">
        Calcula y visualiza el poder del interés compuesto en tus inversiones de
        forma gratuita y sencilla. Ideal para fondos de inversión, cuentas
        remuneradas y planes de pensiones.
      </p>
      <Button
        as={Link}
        href="/calculadora-interes-compuesto"
        variant="primary"
        size="lg"
      >
        Empieza a Calcular Tus Ganancias
      </Button>
    </section>
  );
};

export default AboutIntroSection;
