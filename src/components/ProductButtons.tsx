'use client'

import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { addProduct } from '@/store/calculator/calculatorSlice';
import { ProductDetails, ProductType, productTypes } from '@/financial_products/productTypes';

export default function ProductButtons() {
    const dispatch = useAppDispatch();

    // Selecciona todos los productos del estado global
    const products = useAppSelector((state) => state.calculator.products); // Ajusta el selector según la estructura de tu estado

    // Cuenta los productos por tipo
    const countByType = (type: ProductType) => products.filter(product => product.type === type).length;

    const handleAddProduct = (type: ProductType) => {
        const newProduct: ProductDetails = {
            id: type + Math.random(),
            type: type,
        };
        dispatch(addProduct(newProduct));
    };

    return (
        <section className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
            <button onClick={() => handleAddProduct('inversion')} className="inline-block bg-black hover:bg-gray-800 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base">
                + Añadir Fondo de Inversión 📈
                {countByType('inversion') > 0 && (
                    <span className="inline-flex justify-center items-center ml-2 bg-white text-black rounded-full h-6 w-6">
                        {countByType('inversion')}
                    </span>
                )}
            </button>
            <button onClick={() => handleAddProduct('cuenta')} className="inline-block bg-black hover:bg-gray-800 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base">
                + Añadir Cuenta Remunerada 💰
                {countByType('cuenta') > 0 && (
                    <span className="inline-flex justify-center items-center ml-2 bg-white text-black rounded-full h-6 w-6">
                        {countByType('cuenta')}
                    </span>
                )}
            </button>
            <button onClick={() => handleAddProduct('pension')} className="inline-block bg-black hover:bg-gray-800 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base">
                + Añadir Plan de Pensiones 🏦
                {countByType('pension') > 0 && (
                    <span className="inline-flex justify-center items-center ml-2 bg-white text-black rounded-full h-6 w-6">
                        {countByType('pension')}
                    </span>
                )}
            </button>
        </section>
    );
}
