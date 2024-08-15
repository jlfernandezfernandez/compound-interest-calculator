"use client";
import React, { useMemo } from "react";
import { useAppSelector } from "@/store";
import {
  calculateGlobalYearlyTotals,
  formatCurrency,
  summarizeProducts,
} from "@/domain/financialCalculations";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const ProductsResult = () => {
  const products = useAppSelector((state) => state.calculator.products);

  const summary = useMemo(() => summarizeProducts(products), [products]);

  const pieChartData = useMemo(
    () => ({
      labels: ["Inversiones", "Cuentas Remuneradas", "Planes de Pensión"],
      datasets: [
        {
          label: "Cantidad",
          data: [
            summary.totalProductInversion,
            summary.totalProductRemunerado,
            summary.totalProductPensiones,
          ],
          backgroundColor: ["#FF4242", "#95ED87", "#7FB2F0"],
          borderColor: ["#FF4242", "#95ED87", "#7FB2F0"],
          borderWidth: 1,
        },
      ],
    }),
    [summary]
  );

  const globalYearlyTotals = useMemo(
    () => calculateGlobalYearlyTotals(products),
    [products]
  );

  const totalInitialAmount = useMemo(
    () =>
      products.reduce((sum, product) => sum + (product.initialAmount || 0), 0),
    [products]
  );

  const barChartData = useMemo(
    () => ({
      labels: globalYearlyTotals.map((item) => `${item.year}`),
      datasets: [
        {
          label: "Total Contribuido",
          data: globalYearlyTotals.map((item) => item.totalContribution),
          backgroundColor: "#B784B7",
        },
        {
          label: "Total Intereses Generados",
          data: globalYearlyTotals.map((item) => item.totalInterest),
          backgroundColor: "#E493B3",
        },
        {
          label: "Balance Inicial",
          data: globalYearlyTotals.map(() => totalInitialAmount),
          backgroundColor: "#EEA5A6",
        },
      ],
    }),
    [globalYearlyTotals, totalInitialAmount]
  );

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 mb-8 w-full">
      <div className="flex flex-col items-center w-full">
        <section className="mb-3 flex flex-col items-center text-center">
          <h2 className="text-base lg:text-xl font-bold mb-2 text-gray-900">
            Resumen
          </h2>
        </section>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300 w-full chart-container mt-3 mb-2">
          <BarChart data={barChartData} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-4">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300 flex items-center">
            <table className="w-full">
              <tbody>
                {[
                  { label: "Balance Inicial", value: totalInitialAmount },
                  { label: "Depósitos", value: summary.allTotalContribution },
                  { label: "Intereses", value: summary.allTotalInterest },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <td className="py-3 text-left text-gray-600">
                      {item.label}
                    </td>
                    <td className="py-3 text-right font-medium text-gray-800">
                      {formatCurrency(item.value)}
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gray-300">
                  <td className="py-3 text-left font-semibold text-gray-700">
                    Total
                  </td>
                  <td className="py-3 text-right font-bold text-gray-900">
                    {formatCurrency(summary.allTotalGenerated)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300 flex justify-center items-center">
            <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
              <PieChart data={pieChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsResult;
