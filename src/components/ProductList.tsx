'use client'

import React from 'react';
import { useAppSelector } from '../store';
import ProductCard from "./ProductCard";

export default function ProductList() {

    const products = useAppSelector(state => state.calculator.products);

    return (
        <section className="w-full">
            {products.map((product, index) => (
                <div key={index} className="mb-4 p-4">
                    <ProductCard key={product.id} productDetails={product} />
                </div>
            ))}
        </section>
    );
}
