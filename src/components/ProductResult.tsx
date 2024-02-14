import { ProductDetails } from '@/financial_products/productTypes';
import { updateYearlyTotals } from '@/store/calculator/calculatorSlice';
import DoughnutChart from './DoughnutChart';
import { calculateYearlyTotals, formatCurrency } from '@/domain/financialCalculations';
import { useAppDispatch } from '@/store';
import { useEffect } from 'react';

export default function ProductResult({ productDetails }: { productDetails: ProductDetails }) {
    const dispatch = useAppDispatch();

    const totalYearly = calculateYearlyTotals(productDetails);
    const initialBalance: number = productDetails.initialAmount || 0; // saldo inicial en euros
    let totalContribution: number = 0, totalGenerated: number = 0, totalInterestGenerated: number = 0;

    useEffect(() => {
        dispatch(updateYearlyTotals({ id: productDetails.id, yearlyTotals: totalYearly }));
    }, [dispatch, productDetails.initialAmount, productDetails.contribution, productDetails.interestRate, productDetails.duration, productDetails.contributionFrequency]);


    totalYearly.findLast(data => totalContribution = data.totalContribution ? data.totalContribution : 0);
    totalYearly.findLast(data => totalGenerated = data.totalGenerated || 0);
    totalYearly.findLast(data => totalInterestGenerated = data.totalInterest || 0);

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
    const formattedTotalGenerated = formatCurrency(totalGenerated);
    const formattedTotalInterest = formatCurrency(totalInterestGenerated);

    return (
        <div className='ml-6 p-1 sm:mt-0 mt-5 flex flex-col justify-center items-center'>
            <div className="mb-6 w-full text-center"> {/* Ajusta el ancho según sea necesario y centra el texto */}
                <p><strong>Balance Inicial:</strong> {formattedInitialBalance}</p>
                <p><strong>Depósitos:</strong> {formattedContribution}</p>
                <p><strong>Intereses:</strong> {formattedTotalInterest}</p>
                <p><strong>Total:</strong> {formattedTotalGenerated}</p>
            </div>
            <div className='w-full flex justify-center'>
                <DoughnutChart data={data} />
            </div>
        </div>
    );
}
