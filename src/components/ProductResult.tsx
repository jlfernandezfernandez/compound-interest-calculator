import React from "react";
import {
  ProductDetails,
  periods,
  dataColors,
} from "@/financial_products/productTypes";
import {
  calculateYearlyTotals,
  findCrossoverYear,
  formatCurrency,
} from "@/domain/financialCalculations";
import Chart from "./Chart";
import ProductsSummary from "./ProductsSummary";

export default function ProductResult({
  productDetails,
}: {
  productDetails: ProductDetails;
}) {
  const initialBalance: number = productDetails.initialAmount || 0;
  const yearlyTotals = calculateYearlyTotals(productDetails);
  const lastYear = yearlyTotals.at(-1);
  const totalContribution = lastYear?.totalContribution ?? 0;
  const totalGenerated = lastYear?.totalGenerated ?? 0;
  const totalInterestGenerated = lastYear?.totalInterest ?? 0;
  const crossoverYear = findCrossoverYear(yearlyTotals);
  const doublingYears = productDetails.interestRate
    ? Math.round(72 / productDetails.interestRate)
    : null;

  const chartData = {
    labels: ["Balance Inicial", "Depósitos Totales", "Intereses Totales"],
    datasets: [
      {
        label: "Cantidad",
        data: [initialBalance, totalContribution, totalInterestGenerated],
        backgroundColor: [
          dataColors.initial,
          dataColors.contribution,
          dataColors.interest,
        ],
        borderColor: ["white", "white", "white"],
        borderWidth: 1,
      },
    ],
  };

  const periodAdverb =
    periods.find(
      (period) => period.time === productDetails.contributionFrequency
    )?.adverb || "";

  return (
    <div className="space-y-8 mt-4">
      <ProductsSummary
        totalSavings={totalGenerated}
        totalInterest={totalInterestGenerated}
        monthlySavings={formatCurrency(productDetails.contribution || 0)}
        years={productDetails.duration || 0}
        period={periodAdverb}
        crossoverYear={crossoverYear}
        doublingYears={doublingYears}
      />
      <div className="w-full flex justify-center">
        <Chart variant="doughnut" data={chartData} />
      </div>
    </div>
  );
}
