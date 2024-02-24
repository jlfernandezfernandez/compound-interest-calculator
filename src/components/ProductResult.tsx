import { ProductDetails, periods, productTypes } from '@/financial_products/productTypes';
import { updateYearlyTotals } from '@/store/calculator/calculatorSlice';
import DoughnutChart from './DoughnutChart';
import { calculateYearlyTotals, formatCurrency } from '@/domain/financialCalculations';
import { useAppDispatch } from '@/store';
import { useEffect } from 'react';
import ProductsSummary from './ProductsSummary';

export default function ProductResult({ productDetails }: { productDetails: ProductDetails }) {
    const dispatch = useAppDispatch();

    const totalYearly = calculateYearlyTotals(productDetails);
    const initialBalance: number = productDetails.initialAmount || 0;
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
                    productTypes[productDetails.type]?.initialBalanceColor,
                    productTypes[productDetails.type]?.totalContributionColor,
                    productTypes[productDetails.type]?.totalInterestColor,
                ],
                borderColor: [
                    'white',
                    'white',
                    'white',
                ],
                borderWidth: 1,
            },
        ],
    };

    const formattedTotalGenerated = formatCurrency(totalGenerated);
    const formattedContribution = formatCurrency(productDetails.contribution || 0);
    const periodAdverb = periods.find(period => period.time === productDetails.contributionFrequency)?.adverb || '';

    return (
        <div className='sm:ml-6 ml-0 p-1 sm:mt-0 mt-5 flex flex-col justify-center items-center'>
            <div className="mb-8 w-full">
                <ProductsSummary totalSavings={formattedTotalGenerated} monthlySavings={formattedContribution} years={productDetails.duration || 0} period={periodAdverb} />
            </div>
            <div className='w-full flex justify-center p-2'>
                <DoughnutChart data={data} />
            </div>
        </div>
    );
}
