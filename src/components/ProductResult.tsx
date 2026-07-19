"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
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
import { useCountUp } from "@/lib/useCountUp";

ChartJS.register(ArcElement, Tooltip);

export default function ProductResult({
  productDetails,
}: {
  productDetails: ProductDetails;
}) {
  const yearlyTotals = calculateYearlyTotals(productDetails);
  const lastYear = yearlyTotals.at(-1);
  const totalGenerated = lastYear?.totalGenerated ?? 0;
  const totalInterest = lastYear?.totalInterest ?? 0;
  const crossoverYear = findCrossoverYear(yearlyTotals);
  const doublingYears = productDetails.interestRate
    ? Math.round(72 / productDetails.interestRate)
    : null;

  const animatedTotal = useCountUp(totalGenerated);

  const initialBalance = productDetails.initialAmount || 0;
  const totalContribution = lastYear?.totalContribution ?? 0;

  const donutData = {
    labels: ["Balance Inicial", "Depósitos", "Intereses"],
    datasets: [
      {
        data: [initialBalance, totalContribution, totalInterest],
        backgroundColor: [
          dataColors.initial,
          dataColors.contribution,
          dataColors.interest,
        ],
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    maintainAspectRatio: false,
    cutout: "62%",
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: { label: string; parsed?: number }) =>
            `${context.label}: ${formatCurrency(context.parsed ?? 0)}`,
        },
      },
    },
  };

  const periodAdverb =
    periods.find(
      (period) => period.time === productDetails.contributionFrequency
    )?.adverb || "";

  return (
    <div className="border-t border-gray-100 mt-6 pt-5 text-center">
      <p className="text-xs text-gray-500">
        Ahorrando {formatCurrency(productDetails.contribution || 0)}{" "}
        {periodAdverb} durante {productDetails.duration || 0} años
      </p>
      <p className="font-display text-2xl font-bold tabular-nums text-ink mt-1">
        {formatCurrency(animatedTotal)}
      </p>
      <p className="text-sm font-semibold tabular-nums text-growth">
        +{formatCurrency(totalInterest)} en intereses
      </p>
      {(crossoverYear !== null || doublingYears !== null) && (
        <div className="mt-3 flex flex-wrap justify-center gap-1.5 text-xs">
          {crossoverYear !== null && (
            <span className="bg-leaf-soft text-leaf font-medium px-2.5 py-0.5 rounded-full">
              🌱 Intereses &gt; aportaciones desde el año {crossoverYear}
            </span>
          )}
          {doublingYears !== null && (
            <span className="bg-leaf-soft text-leaf font-medium px-2.5 py-0.5 rounded-full">
              ×2 cada ~{doublingYears} años
            </span>
          )}
        </div>
      )}
      <div className="mt-4 flex items-center justify-center gap-5">
        <div className="w-24 h-24 shrink-0">
          <Doughnut data={donutData} options={donutOptions} />
        </div>
        <dl className="text-xs text-left space-y-1.5">
          {[
            {
              label: "Balance Inicial",
              value: initialBalance,
              color: dataColors.initial,
            },
            {
              label: "Depósitos",
              value: totalContribution,
              color: dataColors.contribution,
            },
            {
              label: "Intereses",
              value: totalInterest,
              color: dataColors.interest,
            },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />
              <dt className="text-gray-500">{item.label}</dt>
              <dd className="ml-auto pl-3 tabular-nums font-medium text-ink">
                {formatCurrency(item.value)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
