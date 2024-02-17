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
        totalInterest: totalYearInterestGenerated
    };
}

export const summarizeProducts = (products: ProductDetails[]) => {
    let totalProductInversion = 0;
    let totalProductRemunerado = 0;
    let totalProductPensiones = 0;
    let allTotalContribution = 0;
    let allTotalInterest = 0;
    let allTotalGenerated = 0;

    products.forEach(product => {
        const yearlyTotals = product.yearlyTotals || [];
        const lastYear = yearlyTotals[yearlyTotals.length - 1] || {};
        const totalGenerated = lastYear.totalGenerated || 0;

        allTotalContribution += lastYear.totalContribution || 0;
        allTotalInterest += lastYear.totalInterest || 0;
        allTotalGenerated += totalGenerated;

        switch (product.type) {
            case 'inversion':
                totalProductInversion += totalGenerated;
                break;
            case 'cuenta':
                totalProductRemunerado += totalGenerated;
                break;
            case 'pension':
                totalProductPensiones += totalGenerated;
                break;
        }
    });

    return {
        totalProductInversion,
        totalProductRemunerado,
        totalProductPensiones,
        allTotalContribution,
        allTotalInterest,
        allTotalGenerated,
    };
};

export const calculateGlobalYearlyTotals = (products: ProductDetails[]) => {
    let globalTotals = [];
    let maxYear = Math.max(...products.map(product => product.duration || 0));

    for (let year = 1; year <= maxYear; year++) {
        let totalContribution = 0;
        let totalGenerated = 0;
        let totalInterest = 0;
        let totalInitialAmount = 0;

        products.forEach(product => {
            const yearlyDetail = product.yearlyTotals?.find(detail => detail.year === year);
            if (yearlyDetail) {
                totalContribution += yearlyDetail.totalContribution;
                totalGenerated += yearlyDetail.totalGenerated;
                totalInterest += yearlyDetail.totalInterest;
            }
            totalInitialAmount += product.initialAmount || 0;
        });

        globalTotals.push({
            year,
            totalContribution,
            totalGenerated,
            totalInterest,
            totalInitialAmount
        });
    }

    return globalTotals;
};