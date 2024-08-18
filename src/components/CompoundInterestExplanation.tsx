// components/CompoundInterestExplanation.tsx
import React from "react";

const CompoundInterestExplanation = () => (
  <section className="bg-gray-100 p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-4">
      El Poder del Interés Compuesto ⚙️
    </h2>
    <p className="mb-4">
      Considerado la <strong>octava maravilla del mundo</strong>, el interés
      compuesto es una herramienta clave para crecer tus ahorros. A diferencia
      del interés simple, el compuesto trabaja poniendo a tus intereses a
      generar más intereses, creando un efecto acumulativo sorprendente.
    </p>
    <h3 className="text-xl font-semibold mb-2">
      Entendiendo la Fórmula Mágica
    </h3>
    <div className="bg-white p-4 rounded-md text-center mb-4">
      <strong>
        A = P(1 + r/n)<sup>nt</sup>
      </strong>
    </div>
    <p className="mb-2">Donde:</p>
    <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
      <li>
        <strong>A</strong> es el total acumulado (principal + intereses).
      </li>
      <li>
        <strong>P</strong> es tu inversión inicial.
      </li>
      <li>
        <strong>r</strong> representa la tasa de interés anual en decimal.
      </li>
      <li>
        <strong>n</strong> es la frecuencia de capitalización al año.
      </li>
      <li>
        <strong>t</strong> son los años de la inversión.
      </li>
    </ul>
    <p className="mb-4">
      Este simple ejemplo muestra cómo tu inversión inicial crece más de un 60%
      sin esfuerzo adicional de tu parte. El secreto está en comenzar lo antes
      posible y mantener tus ahorros invirtiendo a largo plazo.
    </p>
    <p>
      Con <strong>aportaciones regulares</strong> y el tiempo de tu lado, el
      interés compuesto puede ser el motor que impulse tus finanzas personales
      hacia nuevas alturas, permitiéndote alcanzar tus metas financieras y soñar
      aún más grande.
    </p>
  </section>
);

export default CompoundInterestExplanation;
