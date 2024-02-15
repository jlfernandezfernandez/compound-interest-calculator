'use client'

import React from 'react';
import { useAppSelector } from '@/store'; // Asume que este es el path correcto a tu store
import DoughnutChart from './DoughnutChart';
import { formatCurrency } from '@/domain/financialCalculations';

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
                    'gray',
                    'yellow',
                    'green',
                ],
                borderColor: [
                    'gray',
                    'yellow',
                    'green',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        products.length > 0 && (
            <div className='max-w-5xl mx-auto bg-white p-7 rounded-lg shadow-lg mt-5 w-full'>
                <div className='flex flex-col items-center w-full'>
                    <section className="mb-6 flex flex-col items-center text-center">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Resultados Generales</h2>
                    </section>
                    {/* Gráfico Doughnut */}
                    <div className="flex">
                        <div className="mb-6 w-full text-center mr-5"> {/* Ajusta el ancho según sea necesario y centra el texto */}
                            <p><strong>Depósitos:</strong> {formatCurrency(allTotalContribution)}</p>
                            <p><strong>Intereses:</strong> {formatCurrency(allTotalInterest)}</p>
                            <p><strong>Total:</strong> {formatCurrency(allTotalGenerated)}</p>
                        </div>
                        <div>
                            <DoughnutChart data={data} />
                        </div>
                    </div>
                    {/* Aquí puedes añadir más componentes visualizaciones en el futuro */}
                    {/* Por ejemplo, para otros gráficos o datos resumidos */}
                    {/* <div className='w-full lg:w-1/3 px-4'>Otro Componente/Gráfico</div> */}
                </div>
            </div>
        )
    );

}

export default ProductsResult;
