'use client'

import React from 'react';
import { useAppSelector } from '@/store'; // Asume que este es el path correcto a tu store
import DoughnutChart from './DoughnutChart';
import { productTypes } from '@/financial_products/productTypes';

const ProductsResult = () => {
    const products = useAppSelector(state => state.calculator.products);

    // Inicializa los totales a 0
    let totalInversion = 0;
    let totalRemunerado = 0;
    let totalPensiones = 0;

    console.log(products);

    products.forEach(product => {
        const yearlyTotals = product.yearlyTotals || [];
        const lastYear = yearlyTotals[yearlyTotals.length - 1] || {};
        const totalGenerated = lastYear.totalGenerated || 0;

        switch (product.type) {
            case productTypes.inversion.key:
                totalInversion += totalGenerated;
                break;
            case productTypes.cuenta.key:
                totalRemunerado += totalGenerated;
                break;
            case productTypes.pension.key:
                totalPensiones += totalGenerated;
                break;
            default:
                break;
        }
    });

    // Construye el objeto data para el gráfico
    const data = {
        labels: ['Inversiones', 'Cuentas Remuneradas', 'Planes de Pensión'],
        datasets: [
            {
                label: 'Cantidad',
                data: [totalInversion, totalRemunerado, totalPensiones],
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

    return (
        <div className='ml-6 p-1 sm:mt-0 mt-5 flex flex-col justify-center items-center'>
            <div className='w-full flex justify-center'>
                <DoughnutChart data={data} />
            </div>
        </div>
    );
}

export default ProductsResult;
