import React, { useEffect } from "react";
import { useAppDispatch } from "@/store";
import { updateYearlyTotals } from "@/store/calculator/calculatorSlice";
import {
  ProductDetails,
  periods,
  productTypes,
} from "@/financial_products/productTypes";
import {
  calculateYearlyTotals,
  formatCurrency,
} from "@/domain/financialCalculations";
import DoughnutChart from "./DoughnutChart";
import ProductsSummary from "./ProductsSummary";

export default function ProductResult({
  productDetails,
}: {
  productDetails: ProductDetails;
}) {
  const dispatch = useAppDispatch();

  const totalYearly = calculateYearlyTotals(productDetails);
  const initialBalance: number = productDetails.initialAmount || 0;
  let totalContribution: number = 0,
    totalGenerated: number = 0,
    totalInterestGenerated: number = 0;

  useEffect(() => {
    dispatch(
      updateYearlyTotals({ id: productDetails.id, yearlyTotals: totalYearly })
    );
  }, [
    dispatch,
    productDetails.id,
    productDetails.initialAmount,
    productDetails.contribution,
    productDetails.interestRate,
    productDetails.duration,
    productDetails.contributionFrequency,
  ]);

  totalYearly.findLast((data) => {
    totalContribution = data.totalContribution || 0;
    totalGenerated = data.totalGenerated || 0;
    totalInterestGenerated = data.totalInterest || 0;
    return true;
  });

  const chartData = {
    labels: ["Balance Inicial", "Depósitos Totales", "Intereses Totales"],
    datasets: [
      {
        label: "Cantidad",
        data: [initialBalance, totalContribution, totalInterestGenerated],
        backgroundColor: [
          productTypes[productDetails.type]?.initialBalanceColor,
          productTypes[productDetails.type]?.totalContributionColor,
          productTypes[productDetails.type]?.totalInterestColor,
        ],
        borderColor: ["white", "white", "white"],
        borderWidth: 1,
      },
    ],
  };

  const formattedTotalGenerated = formatCurrency(totalGenerated);
  const formattedContribution = formatCurrency(
    productDetails.contribution || 0
  );
  const periodAdverb =
    periods.find(
      (period) => period.time === productDetails.contributionFrequency
    )?.adverb || "";

  return (
    <div className="space-y-8 mt-4">
      <ProductsSummary
        totalSavings={formattedTotalGenerated}
        monthlySavings={formattedContribution}
        years={productDetails.duration || 0}
        period={periodAdverb}
      />
      <div className="w-full flex justify-center">
        <DoughnutChart data={chartData} />
      </div>
    </div>
  );
}
