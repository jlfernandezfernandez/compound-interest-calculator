'use client'

import React from 'react';
import { useAppDispatch } from '../app/store'; // Asegúrate de que la ruta de importación sea correcta
import { addProduct } from '@/app/store/calculator/calculatorSlice';
import { ProductDetails, ProductProps, ProductType } from '@/financial_products/productTypes';

export default function ProductButtons() {
    const dispatch = useAppDispatch();

    const handleAddProduct = (type: ProductType) => {
        const newProduct : ProductDetails = {
            id: type + Math.random(),
            type: type,
        };
        dispatch(addProduct(newProduct));
    };

    return (
        <section className="mb-10 flex justify-center gap-4">
            <button onClick={() => handleAddProduct('inversion')} className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full transition duration-300">+ Añadir Fondo de Inversión 📈</button>
            <button onClick={() => handleAddProduct('cuenta')} className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full transition duration-300">+ Añadir Cuenta Remunerada 💰</button>
            <button onClick={() => handleAddProduct('pension')} className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full transition duration-300">+ Añadir Plan de Pensión 🏦</button>
        </section>
    );
}
