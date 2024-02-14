'use client'

import React from 'react';
import { useAppDispatch } from '../store';
import { addProduct } from '@/store/calculator/calculatorSlice';
import { ProductDetails, ProductProps, ProductType } from '@/financial_products/productTypes';

export default function ProductButtons() {
    const dispatch = useAppDispatch();

    const handleAddProduct = (type: ProductType) => {
        const newProduct: ProductDetails = {
            id: type + Math.random(),
            type: type,
        };
        dispatch(addProduct(newProduct));
    };

    return (
        <section className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
            <button onClick={() => handleAddProduct('inversion')} className="inline-block bg-black hover:bg-gray-800 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base">+ Añadir Fondo de Inversión 📈</button>
            <button onClick={() => handleAddProduct('cuenta')} className="inline-block bg-black hover:bg-gray-800 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base">+ Añadir Cuenta Remunerada 💰</button>
            <button onClick={() => handleAddProduct('pension')} className="inline-block bg-black hover:bg-gray-800 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base">+ Añadir Plan de Pensiones 🏦</button>
        </section>
    );
}
