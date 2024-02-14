
export const productTypes = {
    inversion: { key: 'inversion', emoji: '📈', title: 'Fondo de Inversión' },
    pension: { key: 'pension', emoji: '💰', title: 'Plan de Pensiones' },
    cuenta: { key: 'cuenta', emoji: '🏦', title: 'Cuenta Remunerada' },
};

export type ProductType = keyof typeof productTypes;

export const periods = [
    { value: 'monthly', label: 'Mensual', time: 12 },
    { value: 'annually', label: 'Anual', time: 1 },
    { value: 'daily', label: 'Diario', time: 365 },
    { value: 'quarterly', label: 'Trimestral', time: 3 },
    { value: 'half_yearly', label: 'Semestral', time: 2 },
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
