'use client'

import { useState, useEffect } from 'react';

interface ProductProps {
    productType: 'inversion' | 'pensión' | 'cuenta';
}

// Definir los tipos de productos y sus emojis correspondientes
const productTypes = {
    'inversion': { emoji: '📈', title: 'Fondo de Inversión' },
    'pensión': { emoji: '💰', title: 'Plan de Pensiones' },
    'cuenta': { emoji: '🏦', title: 'Cuenta Remunerada' },
};

export default function Product({ productType }: ProductProps) {
    const [productDetails, setProductDetails] = useState({
        name: '',
        initialAmount: '',
        interestRate: '',
        contribution: '',
        contributionFrequency: 'monthly',
        interestCompounding: 'annually',
    });

    // Buscar el tipo de producto y el emoji
    const productInfo = productTypes[productType] || { emoji: '', title: '' };

    useEffect(() => {
        console.log(productDetails);
    }, [productDetails]);

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
                <div className="text-center text-xl mb-6">
                    {productInfo.emoji} {productInfo.title}
                </div>
                <button
                    onClick={() => console.log("Eliminar producto")}
                    className="text-xs text-red-600 hover:text-red-800 p-1"
                >
                    Eliminar
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Nombre del Producto */}
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-2 font-semibold">Nombre del Producto</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Ej: Fondo S&P 500"
                        value={productDetails.name}
                        onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })}
                        className="input border p-2 rounded"
                    />
                </div>

                {/* Cantidad Inicial */}
                <div className="flex flex-col">
                    <label htmlFor="initialAmount" className="mb-2 font-semibold">Cantidad Inicial</label>
                    <input
                        id="initialAmount"
                        type="number"
                        placeholder="Ej: 1000"
                        value={productDetails.initialAmount}
                        onChange={(e) => setProductDetails({ ...productDetails, initialAmount: e.target.value })}
                        className="input border p-2 rounded"
                    />
                </div>

                {/* Tasa de Interés */}
                <div className="flex flex-col">
                    <label htmlFor="interestRate" className="mb-2 font-semibold">Tasa de Interés (%)</label>
                    <input
                        id="interestRate"
                        type="number"
                        placeholder="Ej: 5"
                        value={productDetails.interestRate}
                        onChange={(e) => setProductDetails({ ...productDetails, interestRate: e.target.value })}
                        className="input border p-2 rounded"
                    />
                </div>

                {/* Aportación */}
                <div className="flex flex-col col-span-2 md:col-span-1">
                    <label htmlFor="contribution" className="mb-2 font-semibold">Aportación</label>
                    <input
                        id="contribution"
                        type="number"
                        placeholder="Ej: 100 mensuales"
                        value={productDetails.contribution}
                        onChange={(e) => setProductDetails({ ...productDetails, contribution: e.target.value })}
                        className="input border p-2 rounded"
                    />
                </div>

                {/* Frecuencia de Aportación y Compuesto */}
                <div className="flex flex-col col-span-2 lg:col-span-1">
                    <label htmlFor="contributionFrequency" className="mb-2 font-semibold">Frecuencia de Aportación</label>
                    <select
                        id="contributionFrequency"
                        value={productDetails.contributionFrequency}
                        onChange={(e) => setProductDetails({ ...productDetails, contributionFrequency: e.target.value })}
                        className="input border p-2 rounded"
                    >
                        <option value="monthly">Mensual</option>
                        <option value="quarterly">Trimestral</option>
                        <option value="annually">Anual</option>
                    </select>
                </div>

                <div className="flex flex-col lg:col-span-1">
                    <label htmlFor="interestCompounding" className="mb-2 font-semibold">Interés Compuesto</label>
                    <select
                        id="interestCompounding"
                        value={productDetails.interestCompounding}
                        onChange={(e) => setProductDetails({ ...productDetails, interestCompounding: e.target.value })}
                        className="input border p-2 rounded"
                    >
                        <option value="annually">Anualmente</option>
                        <option value="monthly">Mensualmente</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
