"use client";
import React from "react";
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

  const {
    totalProductInversion,
    totalProductRemunerado,
    totalProductPensiones,
    allTotalContribution,
    allTotalInterest,
    allTotalGenerated,
  } = summarizeProducts(products);

  const pieChartData = {
    labels: ["Inversiones", "Cuentas Remuneradas", "Planes de Pensión"],
    datasets: [
      {
        label: "Cantidad",
        data: [
          totalProductInversion,
          totalProductRemunerado,
          totalProductPensiones,
        ],
        backgroundColor: ["#FF4242", "#95ED87", "#7FB2F0"],
        borderColor: ["#FF4242", "#95ED87", "#7FB2F0"],
        borderWidth: 1,
      },
    ],
  };

  const globalYearlyTotals = calculateGlobalYearlyTotals(products);

  const barChartData = {
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
        data: globalYearlyTotals.map((item) => item.totalInitialAmount),
        backgroundColor: "#EEA5A6",
      },
    ],
  };

  return (
    products.length > 0 && (
      <div className="max-w-9xl mx-auto mt-8 mb-8 w-full">
        <div className="flex flex-col items-center w-full">
          <section className="mb-3 flex flex-col items-center text-center">
            <h2 className="text-base lg:text-xl font-bold mb-2 text-gray-900 ">
              Resumen
            </h2>
          </section>
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-300 w-full chart-container mt-3 mb-2">
            <BarChart data={barChartData} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
              <div className="text-center">
                <p>
                  <strong>Depósitos:</strong>{" "}
                  {formatCurrency(allTotalContribution)}
                </p>
                <p>
                  <strong>Intereses:</strong> {formatCurrency(allTotalInterest)}
                </p>
                <p>
                  <strong>Total:</strong> {formatCurrency(allTotalGenerated)}
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300 flex justify-center items-center">
              <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3">
                <PieChart data={pieChartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductsResult;
