// components/CTASection.tsx
import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

const CTASection = () => (
  <section className="text-center border-t border-gray-200 pt-8">
    <h2 className="text-base font-semibold text-gray-800 mb-8">
      ¿Listo para comenzar tu propio viaje de inversión?
    </h2>
    <Button
      as={Link}
      href="/calculadora-interes-compuesto"
      variant="primary"
      size="md"
    >
      Simula tu interés compuesto
    </Button>
  </section>
);

export default CTASection;
