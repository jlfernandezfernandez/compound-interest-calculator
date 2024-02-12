// Importa las definiciones de productos y frecuencias de contribución
import { ProductDetails } from '@/financial_products/productTypes';

export default function ProductResult({ productDetails }: { productDetails: ProductDetails }) {
    // Realiza los cálculos necesarios
    const initialBalance = productDetails.initialAmount || 0;
    const contributionFrequency = productDetails.contributionFrequency || 12;
    const years = productDetails.duration || 0;
    const interestRate = productDetails.interestRate || 0;
    const contribution = (productDetails.contribution || 0);
    const capitalizationPeriod = (productDetails.capitalizationPeriod || 12)

    // Calcula el interés total
    const totalContribution = calculateTotalContribution(contribution, years, contributionFrequency);
    const totalInterest = calculateCompoundInterest(initialBalance, contribution, interestRate, years, capitalizationPeriod);

    console.log(totalInterest);

    // Formatea los números con el separador de miles y el separador decimal adecuado
    const formattedInitialBalance = formatCurrency(initialBalance);
    const formattedContribution = formatCurrency(totalContribution);
    const formattedTotalInterest = formatCurrency(totalInterest);

    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Resultados del Cálculo</h2>
            <p><strong>Balance Inicial:</strong> {formattedInitialBalance}</p>
            <p><strong>Depósitos Periódicos:</strong> {formattedContribution}</p>
            <p><strong>Interés Total:</strong> {formattedTotalInterest}</p>
        </div>
    );
}

function calculateCompoundInterest(initialBalance: number, contribution: number, interestRate: number, years: number, contributionFrequency: number) {
    const totalAmount = initialBalance + (contribution * years);
    const totalInterest = totalAmount * ((1 + interestRate / 100 / contributionFrequency) ** (years * contributionFrequency) - 1);
    return totalInterest;
}

function calculateTotalContribution(contribution: number, years: number, contributionFrequency: number) {
    const calculateTotalContribution = years * contributionFrequency;
    const totalAmount = contribution * calculateTotalContribution;
    return totalAmount;
}

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
}
