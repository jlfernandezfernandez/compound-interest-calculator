"use client";

import React from "react";
import { formatCurrency } from "@/domain/financialCalculations";
import { useCountUp } from "@/lib/useCountUp";

interface SavingsPhraseProps {
  totalSavings: number;
  totalInterest: number;
  monthlySavings: string;
  years: number;
  period: string;
  crossoverYear: number | null;
  doublingYears: number | null;
}

export default function ProductsSummary({
  totalSavings,
  totalInterest,
  monthlySavings,
  years,
  period,
  crossoverYear,
  doublingYears,
}: SavingsPhraseProps) {
  const animatedTotal = useCountUp(totalSavings);
  const animatedInterest = useCountUp(totalInterest);

  return (
    <div className="text-center p-2">
      <div className="text-sm text-gray-500 mb-1">
        Ahorrando {monthlySavings} {period} durante {years} años
      </div>
      <div className="font-display text-3xl font-bold tabular-nums text-ink mb-1">
        {formatCurrency(animatedTotal)}
      </div>
      <div className="font-display text-base font-semibold tabular-nums text-growth mb-3">
        +{formatCurrency(animatedInterest)} en intereses
      </div>
      {(crossoverYear !== null || doublingYears !== null) && (
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          {crossoverYear !== null && (
            <span className="bg-leaf-soft text-leaf font-medium px-3 py-1 rounded-full">
              🌱 Desde el año {crossoverYear} tus intereses superan tus
              aportaciones
            </span>
          )}
          {doublingYears !== null && (
            <span className="bg-leaf-soft text-leaf font-medium px-3 py-1 rounded-full">
              ×2 cada ~{doublingYears} años
            </span>
          )}
        </div>
      )}
    </div>
  );
}
