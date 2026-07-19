"use client";
import React, { useMemo } from "react";
import { useProducts } from "@/store";
import {
  calculateGlobalYearlyTotals,
  calculateYearlyTotals,
  findCrossoverYear,
  formatCurrency,
  summarizeProducts,
} from "@/domain/financialCalculations";
import { productTypes, dataColors } from "@/financial_products/productTypes";
import { useCountUp } from "@/lib/useCountUp";
import BarChart from "./BarChart";
import ShareButton from "./ShareButton";

export function SummaryBand() {
  const { products } = useProducts();

  const summary = useMemo(() => summarizeProducts(products), [products]);

  const globalYearlyTotals = useMemo(
    () => calculateGlobalYearlyTotals(products),
    [products]
  );

  const globalCrossoverYear = useMemo(
    () => findCrossoverYear(globalYearlyTotals),
    [globalYearlyTotals]
  );

  const maxYears = useMemo(
    () => Math.max(...products.map((product) => product.duration ?? 0)),
    [products]
  );

  const totalInitialAmount = useMemo(
    () =>
      products.reduce((sum, product) => sum + (product.initialAmount || 0), 0),
    [products]
  );

  const shares = useMemo(
    () =>
      products.map((product) => ({
        id: product.id,
        name: product.name || productTypes[product.type].title,
        color: productTypes[product.type].color,
        total: calculateYearlyTotals(product).at(-1)?.totalGenerated ?? 0,
      })),
    [products]
  );

  const animatedTotal = useCountUp(summary.allTotalGenerated);

  return (
    <section
      aria-label="Resumen del portafolio"
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="text-center lg:text-left">
          <p className="text-sm text-gray-500 mb-1">
            Dentro de {maxYears} años tendrás
          </p>
          <p className="font-display text-4xl lg:text-5xl font-bold tabular-nums text-ink">
            {formatCurrency(animatedTotal)}
          </p>
          <p className="font-display text-lg font-semibold tabular-nums text-growth mt-1">
            +{formatCurrency(summary.allTotalInterest)} en intereses
          </p>
          <div className="mt-4 flex flex-wrap justify-center lg:justify-start items-center gap-2">
            {globalCrossoverYear !== null && (
              <span className="bg-leaf-soft text-leaf text-xs font-medium px-3 py-1 rounded-full">
                🌱 Desde el año {globalCrossoverYear} tus intereses superan tus
                aportaciones
              </span>
            )}
            <ShareButton />
          </div>
        </div>

        <dl className="grid grid-cols-3 lg:grid-cols-1 gap-x-6 gap-y-4 text-center lg:text-right lg:border-l lg:border-gray-100 lg:pl-10">
          {[
            { label: "Balance inicial", value: totalInitialAmount },
            { label: "Depósitos", value: summary.allTotalContribution },
            {
              label: "Intereses",
              value: summary.allTotalInterest,
              highlight: true,
            },
          ].map((item) => (
            <div key={item.label}>
              <dt className="text-sm text-gray-500">{item.label}</dt>
              <dd
                className={`text-base lg:text-lg font-semibold tabular-nums ${
                  item.highlight ? "text-growth" : "text-ink"
                }`}
              >
                {formatCurrency(item.value)}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {shares.length > 1 && summary.allTotalGenerated > 0 && (
        <div className="mt-6">
          <div className="flex h-3 rounded-full overflow-hidden">
            {shares.map((share) => (
              <div
                key={share.id}
                style={{
                  backgroundColor: share.color,
                  width: `${(share.total / summary.allTotalGenerated) * 100}%`,
                }}
                title={`${share.name}: ${formatCurrency(share.total)}`}
              />
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
            {shares.map((share) => (
              <span key={share.id} className="inline-flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: share.color }}
                />
                {share.name}
                <span className="tabular-nums font-medium text-ink">
                  {formatCurrency(share.total)}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export function GrowthAnalytics() {
  const { products } = useProducts();

  const globalYearlyTotals = useMemo(
    () => calculateGlobalYearlyTotals(products),
    [products]
  );

  const globalCrossoverYear = useMemo(
    () => findCrossoverYear(globalYearlyTotals),
    [globalYearlyTotals]
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
          label: "Balance Inicial",
          data: globalYearlyTotals.map(() => totalInitialAmount),
          backgroundColor: dataColors.initial,
        },
        {
          label: "Depósitos",
          data: globalYearlyTotals.map((item) => item.totalContribution),
          backgroundColor: dataColors.contribution,
        },
        {
          label: "Intereses",
          data: globalYearlyTotals.map((item) => item.totalInterest),
          backgroundColor: dataColors.interest,
        },
      ],
    }),
    [globalYearlyTotals, totalInitialAmount]
  );

  return (
    <>
      <section
        aria-label="Evolución del ahorro"
        className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 lg:p-6"
      >
        <h2 className="font-display text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Evolución año a año
        </h2>
        <div className="h-[300px] sm:h-[360px]">
          <BarChart data={barChartData} />
        </div>
      </section>

      <details className="bg-white rounded-2xl border border-gray-200 shadow-sm open:shadow-md transition-shadow group">
        <summary className="cursor-pointer select-none px-5 py-4 text-sm font-semibold text-gray-700 hover:text-leaf transition-colors list-none flex items-center justify-between">
          Desglose año a año
          <span
            aria-hidden="true"
            className="text-gray-400 transition-transform duration-200 group-open:rotate-180"
          >
            ▾
          </span>
        </summary>
        <div className="overflow-x-auto px-2 pb-4">
          <table className="w-full text-sm tabular-nums">
            <thead>
              <tr className="text-gray-500 text-xs uppercase tracking-wide border-b border-gray-200">
                <th className="py-2 px-3 text-left font-medium">Año</th>
                <th className="py-2 px-3 text-right font-medium">Aportado</th>
                <th className="py-2 px-3 text-right font-medium">Intereses</th>
                <th className="py-2 px-3 text-right font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              {globalYearlyTotals.map((year) => (
                <tr
                  key={year.year}
                  className={`border-b border-gray-100 ${
                    year.year === globalCrossoverYear ? "bg-leaf-soft/60" : ""
                  }`}
                >
                  <td className="py-2 px-3 text-left text-gray-600">
                    {year.year}
                    {year.year === globalCrossoverYear && (
                      <span
                        className="ml-1"
                        title="Tus intereses superan tus aportaciones"
                      >
                        🌱
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-3 text-right text-gray-800">
                    {formatCurrency(year.totalContribution + totalInitialAmount)}
                  </td>
                  <td className="py-2 px-3 text-right text-growth">
                    +{formatCurrency(year.totalInterest)}
                  </td>
                  <td className="py-2 px-3 text-right font-medium text-ink">
                    {formatCurrency(year.totalGenerated)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </>
  );
}
