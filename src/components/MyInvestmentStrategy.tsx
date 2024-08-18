// components/MyInvestmentStrategy.tsx
import React from "react";

const MyInvestmentStrategy = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4">Mi Estrategia de Inversión 📊</h2>
    <p className="mb-4">
      Mensualmente, destino el 20% de mi sueldo a diferentes productos de
      inversión. Así es cómo lo distribuyo:
    </p>
    <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>
        <strong>10%</strong> a un plan de pensiones indexado al S&P 500 con
        MyInvestor 📈.
      </li>
      <li>
        <strong>45%</strong> a fondos de inversión y fondos indexados
        gestionados por MiCappital 🏦.
      </li>
      <li>
        <strong>45%</strong> a una cuenta remunerada con Revolut 💰.
      </li>
    </ul>
    <p>
      Esta distribución me permite construir un plan de pensiones privado, junto
      a sus beneficios fiscales, mantener liquidez en la cuenta remunerada y
      aprovechar las altas rentabilidades de los fondos de inversión.
    </p>
  </section>
);

export default MyInvestmentStrategy;
