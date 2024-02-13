// Importa las definiciones de productos y frecuencias de contribución
import { ProductDetails } from '@/financial_products/productTypes';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import DoughnutChart from './DoughnutChart';

export default function ProductResult({ productDetails }: { productDetails: ProductDetails }) {
    // Realiza los cálculos necesarios
    const initialBalance: number = productDetails.initialAmount || 0; // saldo inicial en euros
    const contributionFrequency: number = productDetails.contributionFrequency || 12; // veces al año que se realiza una contribución
    const years: number = productDetails.duration || 0; // años de la inversión
    const interestRate: number = productDetails.interestRate || 0; //interés anual
    const contribution: number = (productDetails.contribution || 0); //cantidad en euros
    const contributionPeriods: number = years * contributionFrequency;

    // Calcula el interés total
    const totalContribution = calculateTotalContribution(contribution, contributionPeriods);
    const totalGenerated = calculateCompoundInterest(initialBalance, contribution, interestRate, contributionPeriods, contributionFrequency);
    const totalInterestGenerated = totalGenerated - totalContribution - initialBalance;

    const data = {
        labels: ['Balance Inicial', 'Depósitos Totales', 'Intereses Totales'],
        datasets: [
            {
                label: 'Cantidad',
                data: [initialBalance, totalContribution, totalInterestGenerated],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Formatea los números con el separador de miles y el separador decimal adecuado
    const formattedInitialBalance = formatCurrency(initialBalance);
    const formattedContribution = formatCurrency(totalContribution);
    const formattedTotalInterest = formatCurrency(totalGenerated);

    return (
        <div className='ml-6 p-1 sm:mt-0 mt-5 flex flex-col justify-center items-center'>
            <div className="mb-6 w-full text-center"> {/* Ajusta el ancho según sea necesario y centra el texto */}
                <p><strong>Balance Inicial:</strong> {formattedInitialBalance}</p>
                <p><strong>Depósitos:</strong> {formattedContribution}</p>
                <p><strong>Interes:</strong> {formattedTotalInterest}</p>
            </div>
            <div className='w-full flex justify-center'>
                <DoughnutChart data={data} />
            </div>
        </div>
    );
    
}

function calculateCompoundInterest(initialBalance: number, contribution: number, interestRate: number, contributionPeriods: number, contributionFrequency: number): number {
    const ratePerPeriod: number = interestRate / 100 / contributionFrequency;
    let futureValue: number = initialBalance;

    for (let i = 0; i < contributionPeriods; i++) {
        futureValue = futureValue * (1 + ratePerPeriod);
        futureValue += contribution;
    }

    return futureValue;
}


function calculateTotalContribution(contribution: number, contributionPeriods: number) {
    const totalAmount = contribution * contributionPeriods;
    return totalAmount;
}

function formatCurrency(amount: number) {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount);
}
