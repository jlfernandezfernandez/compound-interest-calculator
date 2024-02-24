
export const productTypes = {
    inversion: { key: 'inversion', emoji: '📈', title: 'Fondo de Inversión', initialBalanceColor:'#f57a74', totalContributionColor:'#f9b3af', totalInterestColor:'#f2544c'},
    pension: { key: 'pension', emoji: '💰', title: 'Plan de Pensiones', initialBalanceColor:'#4D79C7', totalContributionColor:'#7FB2F0', totalInterestColor:'#35478D'},
    cuenta: { key: 'cuenta', emoji: '🏦', title: 'Cuenta Remunerada', initialBalanceColor:'#157E38', totalContributionColor:'#45BF55', totalInterestColor:'#044E29'},
};

export type ProductType = keyof typeof productTypes;

export const periods = [
    { value: 'monthly', label: 'Mensual', time: 12, adverb: 'mensual' },
    { value: 'annually', label: 'Anual', time: 1, adverb: 'anual' },
    { value: 'daily', label: 'Diario', time: 365, adverb: 'diario' },
    { value: 'quarterly', label: 'Trimestral', time: 3, adverb: 'trimestral' },
    { value: 'half_yearly', label: 'Semestral', time: 2, adverb: 'semestral' },
];

export type ProductPeriodicity = typeof periods[number]['time'];

export interface YearlyTotals {
    year: number; 
    totalContribution: number; // Contribución total hasta ese año
    totalGenerated: number; // Total generado hasta ese año
    totalInterest: number; // Total de intereses generados hasta ese año
}

export interface ProductDetails {
    id: string
    type: ProductType
    name?: string;
    initialAmount?: number;
    interestRate?: number;
    contribution?: number;
    contributionFrequency?: ProductPeriodicity;
    duration?: number;
    capitalizationPeriod?: ProductPeriodicity;
    yearlyTotals?: YearlyTotals[];
}

export interface ProductProps {
    productType: ProductType;
}
