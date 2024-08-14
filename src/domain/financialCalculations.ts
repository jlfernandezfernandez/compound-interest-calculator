import {
  ProductDetails,
  YearlyTotals,
  ProductType,
  ProductPeriodicity,
} from "@/financial_products/productTypes";

export function calculateYearCompoundInterest(
  initialBalance: number,
  contribution: number,
  interestRate: number,
  years: number,
  contributionFrequency: ProductPeriodicity
): number {
  const contributionPeriods: number = years * contributionFrequency;
  const ratePerPeriod: number = interestRate / 100 / contributionFrequency;
  return Array(contributionPeriods)
    .fill(0)
    .reduce(
      (futureValue) => futureValue * (1 + ratePerPeriod) + contribution,
      initialBalance
    );
}

export function calculateYearContribution(
  contribution: number,
  years: number,
  contributionFrequency: ProductPeriodicity
): number {
  return contribution * years * contributionFrequency;
}

export const formatCurrency = (amount: number): string =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(
    amount
  );

export function calculateYearlyTotals(
  productDetails: ProductDetails
): YearlyTotals[] {
  const {
    initialAmount = 0,
    contributionFrequency = 12,
    duration = 0,
    interestRate = 0,
    contribution = 0,
  } = productDetails;

  return Array.from({ length: duration }, (_, i) => i + 1).map((year) =>
    calculateYearTotal(
      initialAmount,
      contribution,
      interestRate,
      year,
      contributionFrequency
    )
  );
}

function calculateYearTotal(
  initialBalance: number,
  contribution: number,
  interestRate: number,
  year: number,
  contributionFrequency: ProductPeriodicity
): YearlyTotals {
  const totalYearContribution = calculateYearContribution(
    contribution,
    year,
    contributionFrequency
  );
  const totalYearGenerated = calculateYearCompoundInterest(
    initialBalance,
    contribution,
    interestRate,
    year,
    contributionFrequency
  );
  const totalYearInterestGenerated =
    totalYearGenerated - totalYearContribution - initialBalance;

  return {
    year,
    totalContribution: totalYearContribution,
    totalGenerated: totalYearGenerated,
    totalInterest: totalYearInterestGenerated,
  };
}

export const summarizeProducts = (products: ProductDetails[]) => {
  return products.reduce<{
    totalProductInversion: number;
    totalProductRemunerado: number;
    totalProductPensiones: number;
    allTotalContribution: number;
    allTotalInterest: number;
    allTotalGenerated: number;
  }>(
    (summary, product) => {
      const lastYear: Partial<YearlyTotals> =
        product.yearlyTotals?.[product.yearlyTotals.length - 1] ?? {};
      const totalGenerated = lastYear.totalGenerated ?? 0;

      summary.allTotalContribution += lastYear.totalContribution ?? 0;
      summary.allTotalInterest += lastYear.totalInterest ?? 0;
      summary.allTotalGenerated += totalGenerated;

      switch (product.type) {
        case "inversion":
          summary.totalProductInversion += totalGenerated;
          break;
        case "cuenta":
          summary.totalProductRemunerado += totalGenerated;
          break;
        case "pension":
          summary.totalProductPensiones += totalGenerated;
          break;
      }

      return summary;
    },
    {
      totalProductInversion: 0,
      totalProductRemunerado: 0,
      totalProductPensiones: 0,
      allTotalContribution: 0,
      allTotalInterest: 0,
      allTotalGenerated: 0,
    }
  );
};

export const calculateGlobalYearlyTotals = (
  products: ProductDetails[]
): YearlyTotals[] => {
  const maxYear = Math.max(...products.map((product) => product.duration ?? 0));

  return Array.from({ length: maxYear }, (_, i) => i + 1).map((year) => {
    return products.reduce<YearlyTotals>(
      (yearTotal, product) => {
        const yearlyDetail = product.yearlyTotals?.find(
          (detail) => detail.year === year
        );
        if (yearlyDetail) {
          yearTotal.totalContribution += yearlyDetail.totalContribution;
          yearTotal.totalGenerated += yearlyDetail.totalGenerated;
          yearTotal.totalInterest += yearlyDetail.totalInterest;
        }
        return yearTotal;
      },
      {
        year,
        totalContribution: 0,
        totalGenerated: 0,
        totalInterest: 0,
      }
    );
  });
};
