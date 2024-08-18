// components/ImproveResultsCompoundInterest.tsx
import React from "react";
import Link from "next/link";
import Button from "./Button";

const ImproveResultsCompoundInterest = () => (
  <section className="mb-12 bg-gray-100 p-6 rounded-lg">
    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
      El Poder del Interés Compuesto 📈
    </h2>
    <p className="text-base sm:text-lg text-gray-700 mb-4">
      El interés compuesto es considerado la octava maravilla del mundo
      financiero. Es el proceso por el cual el interés se añade al capital
      principal, generando así más intereses en el siguiente período.
    </p>
    <p className="text-base sm:text-lg text-gray-700 mb-6">
      Por ejemplo, una inversión de 1.000€ con un interés anual del 5%
      compuesto, después de 20 años se convertiría en 2.653,30€, ¡más del doble!
    </p>
    <div className="text-center">
      <Button
        as={Link}
        href="/calculadora-interes-compuesto"
        variant="secondary"
        size="md"
      >
        Calcula tu interés compuesto
      </Button>
    </div>
  </section>
);

export default ImproveResultsCompoundInterest;
