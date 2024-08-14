import React from "react";

interface SavingsPhraseProps {
  totalSavings: string;
  monthlySavings: string;
  years: number;
  period: string;
}

export default function ProductsSummary({
  totalSavings,
  monthlySavings,
  years,
  period,
}: SavingsPhraseProps) {
  return (
    <div className="text-center">
      <div className="text-lg mb-1">¡Gran trabajo! 🎉</div>
      <div className="text-2xl font-bold mb-1">{totalSavings}</div>
      <div className="text-lg">
        Ahorro {monthlySavings} {period} durante {years} años
      </div>
    </div>
  );
}
