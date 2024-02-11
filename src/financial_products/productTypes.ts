
export const productTypes = {
    inversion: { emoji: '📈', title: 'Fondo de Inversión' },
    pension: { emoji: '💰', title: 'Plan de Pensiones' },
    cuenta: { emoji: '🏦', title: 'Cuenta Remunerada' },
};

export type ProductType = keyof typeof productTypes;

export interface ProductDetails {
    id: string
    type: ProductType
    name?: string;
    initialAmount?: string;
    interestRate?: string;
    contribution?: string;
    contributionFrequency?: 'monthly' | 'quarterly' | 'annually';
    interestCompounding?: 'annually' | 'monthly';
}

export interface ProductProps {
    productType: ProductType;
}
