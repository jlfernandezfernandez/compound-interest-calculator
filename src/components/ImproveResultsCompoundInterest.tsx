// components/ImproveResultsCompoundInterest.tsx
import React from "react";
import Link from "next/link";

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
    <p className="text-base sm:text-lg text-gray-700 mb-4">
      Por ejemplo, una inversión de 1.000€ con un interés anual del 5%
      compuesto, después de 20 años se convertiría en 2.653,30€, ¡más del doble!
    </p>
    <div className="text-center">
      <Link
        href="/calculadora-interes-compuesto"
        className="inline-block bg-gray-200 text-black py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 font-medium"
      >
        Calcula tu interés compuesto
      </Link>
    </div>
  </section>
);

export default ImproveResultsCompoundInterest;
