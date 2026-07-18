import React from "react";

interface SavingsPhraseProps {
  totalSavings: string;
  totalInterest: string;
  monthlySavings: string;
  years: number;
  period: string;
}

export default function ProductsSummary({
  totalSavings,
  totalInterest,
  monthlySavings,
  years,
  period,
}: SavingsPhraseProps) {
  return (
    <div className="text-center p-2">
      <div className="text-sm text-gray-500 mb-1">
        Ahorrando {monthlySavings} {period} durante {years} años
      </div>
      <div className="font-display text-3xl font-bold tabular-nums text-ink mb-1">
        {totalSavings}
      </div>
      <div className="font-display text-base font-semibold tabular-nums text-growth">
        +{totalInterest} en intereses
      </div>
    </div>
  );
}
