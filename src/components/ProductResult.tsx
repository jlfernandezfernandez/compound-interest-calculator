import React from 'react';
import { ProductDetails } from '@/financial_products/productTypes';

interface ProductResultProps {
    productDetails: ProductDetails;
}

export default function ProductResult({ productDetails }: ProductResultProps) {
    // Realiza los cálculos necesarios
    const initialBalance = productDetails.initialAmount || 0;
    const totalContributions = (productDetails.contribution || 0) * (productDetails.duration || 0);
    const interestRate = productDetails.interestRate || 0;
    const years = productDetails.duration || 0;

    // Calcula el interés total
    const totalInterest = calculateCompoundInterest(initialBalance, totalContributions, interestRate, years);

    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Resultados del Cálculo</h2>
            <p><strong>Balance Inicial:</strong> {initialBalance}</p>
            <p><strong>Depósitos Periódicos:</strong> {totalContributions}</p>
            <p><strong>Interés Total:</strong> {totalInterest}</p>
        </div>
    );
}

// Función para calcular el interés compuesto
function calculateCompoundInterest(initialBalance: number, totalContributions: number, interestRate: number, years: number) {
    const totalAmount = initialBalance + totalContributions;
    const totalInterest = totalAmount * ((1 + interestRate / 100) ** years - 1);
    return totalInterest.toFixed(2);
}
