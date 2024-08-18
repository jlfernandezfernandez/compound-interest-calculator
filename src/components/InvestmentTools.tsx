// components/InvestmentTools.tsx
import React from "react";

const InvestmentTools = () => (
  <section>
    <h2 className="text-2xl font-bold mb-4">Herramientas que Utilizo 🔧</h2>
    <p className="mb-4">Para implementar mi estrategia, hago uso de:</p>
    <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>
        <strong>MyInvestor</strong> para mi plan de pensiones y fondos de
        inversión, elegidos por sus bajas comisiones 🚀.
      </li>
      <li>
        <strong>MiCappital</strong>, que me asesora en la selección y gestión de
        mis fondos de inversión 👥.
      </li>
      <li>
        <strong>Revolut</strong> para mi cuenta remunerada, aprovechando su
        interés diario en el plan gratuito 🌐.
      </li>
    </ul>
    <p>
      Antes de llegar a este punto he probado otras herramientas como un
      roboadvisor, huchas de ahorro, además de haber tenido el plan de pensiones
      en otro banco. Ahora estoy mucho más a gusto y genero más rentabilidad.
    </p>
  </section>
);

export default InvestmentTools;
