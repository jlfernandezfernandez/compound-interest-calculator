"use client";
import React, { useMemo } from "react";
import { useProducts } from "@/store";
import {
  calculateGlobalYearlyTotals,
  findCrossoverYear,
  formatCurrency,
  summarizeProducts,
} from "@/domain/financialCalculations";
import { productTypes, dataColors } from "@/financial_products/productTypes";
import { useCountUp } from "@/lib/useCountUp";
import Chart from "./Chart";
import BarChart from "./BarChart";
import ShareButton from "./ShareButton";

const ProductsResult = () => {
  const { products } = useProducts();

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
          backgroundColor: [
            productTypes.inversion.color,
            productTypes.cuenta.color,
            productTypes.pension.color,
          ],
          borderWidth: 0,
        },
      ],
    }),
    [summary]
  );

  const globalYearlyTotals = useMemo(
    () => calculateGlobalYearlyTotals(products),
    [products]
  );

  const globalCrossoverYear = useMemo(
    () => findCrossoverYear(globalYearlyTotals),
    [globalYearlyTotals]
  );

  const animatedTotal = useCountUp(summary.allTotalGenerated);

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
          backgroundColor: dataColors.contribution,
        },
        {
          label: "Total Intereses Generados",
          data: globalYearlyTotals.map((item) => item.totalInterest),
          backgroundColor: dataColors.interest,
        },
        {
          label: "Balance Inicial",
          data: globalYearlyTotals.map(() => totalInitialAmount),
          backgroundColor: dataColors.initial,
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
        <section className="mb-3 flex flex-col items-center text-center gap-2">
          <h2 className="font-display text-base lg:text-xl font-bold text-ink">
            Resumen
          </h2>
          {globalCrossoverYear !== null && (
            <p className="text-sm text-gray-600">
              🌱 Desde el año{" "}
              <span className="font-semibold text-leaf">
                {globalCrossoverYear}
              </span>{" "}
              tus intereses superan tus aportaciones
            </p>
          )}
          <ShareButton />
        </section>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300 w-full chart-container mt-3 mb-2">
          <BarChart data={barChartData} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-4">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 flex items-center transition-shadow duration-200 hover:shadow-xl">
            <table className="w-full">
              <tbody>
                {[
                  { label: "Balance Inicial", value: totalInitialAmount },
                  { label: "Depósitos", value: summary.allTotalContribution },
                  {
                    label: "Intereses",
                    value: summary.allTotalInterest,
                    highlight: true,
                  },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-leaf-soft/50 transition-colors duration-150"
                  >
                    <td className="py-3 pl-4 text-left text-gray-700 text-base">
                      {item.label}
                    </td>
                    <td
                      className={`py-3 pr-4 text-right font-medium tabular-nums ${
                        item.highlight ? "text-growth font-semibold" : "text-gray-800"
                      }`}
                    >
                      {item.highlight && "+"}
                      {formatCurrency(item.value)}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-3 text-left pl-4 font-semibold text-gray-700">
                    Total
                  </td>
                  <td className="py-3 pr-4 text-right font-display font-bold text-ink tabular-nums">
                    {formatCurrency(animatedTotal)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300 flex justify-center items-center">
            <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
              <Chart variant="pie" data={pieChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsResult;
