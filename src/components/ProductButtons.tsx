"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { addProduct } from "@/store/calculator/calculatorSlice";
import {
  ProductDetails,
  ProductType,
  productTypes,
  periods,
} from "@/financial_products/productTypes";

export default function ProductButtons() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.calculator.products);

  const countByType = (type: ProductType) =>
    products.filter((product) => product.type === type).length;

  const handleAddProduct = (type: ProductType) => {
    const count = countByType(type);
    const newName =
      count === 0
        ? productTypes[type].title
        : `${productTypes[type].title} ${count + 1}`;

    const newProduct: ProductDetails = {
      id: `${type}-${Math.random().toString(36).substr(2, 9)}`,
      type: type,
      name: newName,
      initialAmount: 3000,
      contribution: 250,
      interestRate: 3.5,
      duration: 25,
      contributionFrequency: 12, // Monthly by default
      capitalizationPeriod: 12, // Monthly by default
    };
    dispatch(addProduct(newProduct));
  };

  return (
    <section
      className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
      aria-label="Añadir productos de inversión"
    >
      {(Object.keys(productTypes) as ProductType[]).map((type) => {
        const info = productTypes[type];
        return (
          <button
            key={type}
            onClick={() => handleAddProduct(type)}
            className="group relative bg-white border border-gray-300 hover:border-gray-400 text-gray-800 py-3 px-4 rounded-lg transition duration-300 shadow-sm hover:shadow-md flex items-center justify-center h-16 w-full"
            aria-label={`Añadir ${info.title}`}
          >
            <span className="flex items-center text-sm">
              <span className="mr-2 text-lg">{info.emoji}</span>
              <span className="font-medium">Añadir {info.title}</span>
            </span>
            {countByType(type) > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {countByType(type)}
              </span>
            )}
          </button>
        );
      })}
    </section>
  );
}
