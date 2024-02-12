
export const productTypes = {
    inversion: { emoji: '📈', title: 'Fondo de Inversión' },
    pension: { emoji: '💰', title: 'Plan de Pensiones' },
    cuenta: { emoji: '🏦', title: 'Cuenta Remunerada' },
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
}

export interface ProductProps {
    productType: ProductType;
}
