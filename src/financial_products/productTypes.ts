
export const productTypes = {
    inversion: { key: 'inversion', emoji: '📈', title: 'Fondo de Inversión', color: '#2e7d4f' },
    pension: { key: 'pension', emoji: '💰', title: 'Plan de Pensiones', color: '#5b8bc9' },
    cuenta: { key: 'cuenta', emoji: '🏦', title: 'Cuenta Remunerada', color: '#7fb2a0' },
};

export const dataColors = {
    initial: '#9aa79f',
    contribution: '#5b8bc9',
    interest: '#e3a63c',
};

export type ProductType = keyof typeof productTypes;

export const periods = [
    { value: 'monthly', label: 'Mensual', time: 12, adverb: 'mensual' },
    { value: 'annually', label: 'Anual', time: 1, adverb: 'anual' },
    { value: 'daily', label: 'Diario', time: 365, adverb: 'diario' },
    { value: 'quarterly', label: 'Trimestral', time: 4, adverb: 'trimestral' },
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
}
