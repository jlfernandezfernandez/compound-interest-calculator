'use client'

import React from 'react';
import { useAppSelector } from '@/store'; // Asume que este es el path correcto a tu store
import { formatCurrency } from '@/domain/financialCalculations';
import PieChart from './PieChart';

const ProductsResult = () => {
    const products = useAppSelector(state => state.calculator.products);

    let totalInversion = 0;
    let totalRemunerado = 0;
    let totalPensiones = 0;

    let allTotalContribution = 0;
    let allTotalInterest = 0;
    let allTotalGenerated = 0;


    products.forEach(product => {
        const yearlyTotals = product.yearlyTotals || [];
        const lastYear = yearlyTotals[yearlyTotals.length - 1] || {};
        const totalGenerated = lastYear.totalGenerated || 0;

        allTotalContribution += lastYear.totalContribution || 0;
        allTotalInterest += lastYear.totalInterest || 0;
        allTotalGenerated += totalGenerated;

        switch (product.type) {
            case 'inversion':
                totalInversion += totalGenerated;
                break;
            case 'cuenta':
                totalRemunerado += totalGenerated;
                break;
            case 'pension':
                totalPensiones += totalGenerated;
                break;
            default:
                break;
        }
    });

    const data = {
        labels: ['Inversiones', 'Cuentas Remuneradas', 'Planes de Pensión'],
        datasets: [
            {
                label: 'Cantidad',
                data: [totalInversion, totalRemunerado, totalPensiones],
                backgroundColor: [
                    '#E74D3C',
                    '#DAA507',
                    '#8EC7D2',
                ],
                borderColor: [
                    '#E74D3C',
                    '#DAA507',
                    '#8EC7D2',
                ],
                borderWidth: 1,
            },
        ],
    };

    return products.length > 0 && (
        <div className='max-w-5xl mx-auto mt-4 w-full'>
            <div className='flex flex-col items-center w-full'>
                <section className="mb-6 flex flex-col items-center text-center">
                    <h2 className="text-xl md:text-2xl font-bold">Resumen 📊</h2>
                </section>
                {/* Gráfico Doughnut y Resumen */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div className="p-10 rounded-lg shadow-lg text-center">
                        <p><strong>Depósitos:</strong> {formatCurrency(allTotalContribution)}</p>
                        <p><strong>Intereses:</strong> {formatCurrency(allTotalInterest)}</p>
                        <p><strong>Total:</strong> {formatCurrency(allTotalGenerated)}</p>
                    </div>
                    <div className='p-7 rounded-lg shadow-lg'>
                        <PieChart data={data} />
                    </div>
                </div>
                {/* Aquí puedes añadir más componentes o visualizaciones en el futuro */}
            </div>
        </div>
    );
}

export default ProductsResult;
