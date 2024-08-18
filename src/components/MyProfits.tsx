import React from "react";
import BarChart from "./BarChart";
import { barChartData } from "@/examples/profits_examples";

export default function MyProfits() {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Mis Rentabilidades Actuales 📈
      </h2>
      <div className="ml-1">
        <div className="mb-5">
          <p>Gracias a mi estrategia de inversión, en 20 meses he alcanzado:</p>
          <ul className="list-disc list-inside space-y-1 my-4 ml-2">
            <li>
              <strong>Plan de Pensiones:</strong> 9,44% de rentabilidad.
            </li>
            <li>
              <strong>Fondos de Inversión:</strong> 11,75% de rentabilidad.
            </li>
            <li>
              <strong>Cuenta Remunerada:</strong> 2,87% de rentabilidad anual.
            </li>
          </ul>
        </div>

        <p className="mb-2 mt-4">
          A continuación, con mis rentabilidades te enseño una{" "}
          <strong>simulación durante 25 años</strong>:
        </p>
        <ul className="list-disc list-inside space-y-1 my-4 ml-2">
          <li>Capital inicial de 1.000€ en cada producto.</li>
          <li>
            Aportaciones mensuales de 200€ en fondos de inversión y cuenta
            remunerada.
          </li>
          <li>Aportaciones mensuales de 50€ para el plan de pensiones.</li>
        </ul>

        <div className="p-5 w-full chart-container mt-3 mb-2">
          <BarChart data={barChartData} />
        </div>
        <p className="mt-2">
          Observa cómo en los{" "}
          <strong>
            últimos años el efecto del interés compuesto impulsa el valor de los
            ahorros
          </strong>
          , demostrando su poder para transformar aportaciones regulares en un
          patrimonio considerable.
        </p>
      </div>
    </div>
  );
}
