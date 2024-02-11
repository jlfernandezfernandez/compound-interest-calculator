'use client'

import React from 'react';
import { useAppSelector } from '../app/store'; // Ajusta la ruta de importación según sea necesario
import Product from "./Product";

export default function ProductList() {

    const products = useAppSelector(state => state.calculator.products);

    return (
        <section>
            {products.map((product, index) => (
                <div key={index} className="mb-4 p-4">
                    <Product key={index} {...product} /> {/* Ajusta según la prop que espera `Product` */}
                </div>
            ))}
        </section>
    );
}
