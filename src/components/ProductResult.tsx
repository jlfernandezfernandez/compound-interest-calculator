// Importa las definiciones de productos y frecuencias de contribución
import { ProductDetails } from '@/financial_products/productTypes';

export default function ProductResult({ productDetails }: { productDetails: ProductDetails }) {
    // Realiza los cálculos necesarios
    const initialBalance: number = productDetails.initialAmount || 0; // saldo inicial en euros
    const contributionFrequency: number = productDetails.contributionFrequency || 12; // veces al año que se realiza una contribución
    const years: number = productDetails.duration || 0; // años de la inversión
    const interestRate: number = productDetails.interestRate || 0; //interés anual
    const contribution: number = (productDetails.contribution || 0); //cantidad en euros
    const periods: number = years * contributionFrequency;

    // Calcula el interés total
    const totalContribution = calculateTotalContribution(contribution, periods);
    const totalInterest = calculateCompoundInterest(initialBalance, contribution, interestRate, periods, contributionFrequency);

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

function calculateCompoundInterest(initialBalance: number, contribution: number, interestRate: number, periods: number, contributionFrequency: number): number {
    const ratePerPeriod: number = interestRate / 100 / contributionFrequency;
    let futureValue: number = initialBalance;

    for (let i = 0; i < periods; i++) {
        futureValue = futureValue * (1 + ratePerPeriod);
        futureValue += contribution;
    }

    return futureValue;
}


function calculateTotalContribution(contribution: number, periods: number) {
    const totalAmount = contribution * periods;
    return totalAmount;
}

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
}
