import { ProductDetails, YearlyTotals } from "@/financial_products/productTypes";

export function calculateYearCompoundInterest(initialBalance: number, contribution: number, interestRate: number, years: number, contributionFrequency: number): number {
    const contributionPeriods: number = years * contributionFrequency;
    const ratePerPeriod: number = interestRate / 100 / contributionFrequency;
    let futureValue: number = initialBalance;

    for (let i = 0; i < contributionPeriods; i++) {
        futureValue = futureValue * (1 + ratePerPeriod);
        futureValue += contribution;
    }

    return futureValue;
}

export function calculateYearContribution(contribution: number, years: number, contributionFrequency: number) {
    const contributionPeriods: number = years * contributionFrequency;
    const totalAmount = contribution * contributionPeriods;
    return totalAmount;
}

export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
}

export function calculateYearlyTotals(productDetails: ProductDetails): YearlyTotals[] {
    const initialBalance: number = productDetails.initialAmount || 0; // saldo inicial en euros
    const contributionFrequency: number = productDetails.contributionFrequency || 12; // veces al año que se realiza una contribución
    const years: number = productDetails.duration || 0; // años de la inversión
    const interestRate: number = productDetails.interestRate || 0; //interés anual
    const contribution: number = (productDetails.contribution || 0); //cantidad en euros

    const yearlyDetails = [];
    for (let year = 1; year <= years; year++) {
        yearlyDetails.push(calculateYearTotal(initialBalance, contribution, interestRate, year, contributionFrequency));
    }
    return yearlyDetails;
}

function calculateYearTotal(initialBalance: number, contribution: number, interestRate: number, year: number, contributionFrequency: number): YearlyTotals {
    const totalYearContribution = calculateYearContribution(contribution, year, contributionFrequency);
    const totalYearGenerated = calculateYearCompoundInterest(initialBalance, contribution, interestRate, year, contributionFrequency);
    const totalYearInterestGenerated = totalYearGenerated - totalYearContribution - initialBalance;
    return {
        year: year,
        totalContribution: totalYearContribution,
        totalGenerated: totalYearGenerated,
        totalInterest: totalYearInterestGenerated,
    };
}