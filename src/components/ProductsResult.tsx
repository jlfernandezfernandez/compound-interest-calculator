'use client'

import React from 'react';
import { useAppSelector } from '@/store'; // Asume que este es el path correcto a tu store
import { calculateGlobalYearlyTotals, formatCurrency, summarizeProducts } from '@/domain/financialCalculations';
import PieChart from './PieChart';
import BarChart from './BarChart';

const ProductsResult = () => {
    const products = useAppSelector(state => state.calculator.products);

    const {
        totalProductInversion,
        totalProductRemunerado,
        totalProductPensiones,
        allTotalContribution,
        allTotalInterest,
        allTotalGenerated,
    } = summarizeProducts(products);

    const pieChartData = {
        labels: ['Inversiones', 'Cuentas Remuneradas', 'Planes de Pensión'],
        datasets: [
            {
                label: 'Cantidad',
                data: [totalProductInversion, totalProductRemunerado, totalProductPensiones],
                backgroundColor: [
                    '#FFCF96',
                    '#F6FDC3',
                    '#CDFADB',
                ],
                borderColor: [
                    '#FFCF96',
                    '#F6FDC3',
                    '#CDFADB',
                ],
                borderWidth: 1,
            },
        ],
    };

    const globalYearlyTotals = calculateGlobalYearlyTotals(products);

    const barChartData = {
        labels: globalYearlyTotals.map(item => `${item.year}`),
        datasets: [
            {
                label: 'Total Contribuido',
                data: globalYearlyTotals.map(item => item.totalContribution),
                backgroundColor: '#B784B7',
            },
            {
                label: 'Total Intereses Generados',
                data: globalYearlyTotals.map(item => item.totalInterest),
                backgroundColor: '#E493B3',
            },
            {
                label: 'Balance Inicial',
                data: globalYearlyTotals.map(item => item.totalInitialAmount),
                backgroundColor: '#EEA5A6',
            },
        ],
    };

    return products.length > 0 && (
        <div className='max-w-5xl mx-auto mt-4 mb-4 w-full'>
            <div className='flex flex-col items-center w-full'>
                <section className="mb-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold">Resumen 📊</h2>
                </section>
                <div className='p-5 rounded-lg shadow-lg w-full chart-container'>
                    <BarChart data={barChartData} />
                </div>
                {/* Gráfico Doughnut y Resumen */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div className="p-10 rounded-lg shadow-lg text-center">
                        <div>
                            <p><strong>Depósitos:</strong> {formatCurrency(allTotalContribution)}</p>
                            <p><strong>Intereses:</strong> {formatCurrency(allTotalInterest)}</p>
                            <p><strong>Total:</strong> {formatCurrency(allTotalGenerated)}</p>
                        </div>
                    </div>
                    <div className='p-7 rounded-lg shadow-lg'>
                        <PieChart data={pieChartData} />
                    </div>
                </div>
                {/* Aquí puedes añadir más componentes o visualizaciones en el futuro */}
            </div>
        </div>
    );
}

export default ProductsResult;
