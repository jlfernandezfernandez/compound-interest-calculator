"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { addProduct } from "@/store/calculator/calculatorSlice";
import {
  ProductDetails,
  ProductType,
  productTypes,
} from "@/financial_products/productTypes";

export default function ProductButtons() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.calculator.products);

  const countByType = (type: ProductType) =>
    products.filter((product) => product.type === type).length;

  const handleAddProduct = (type: ProductType) => {
    const newProduct: ProductDetails = {
      id: type + Math.random(),
      type: type,
      contributionFrequency: 12,
      initialAmount: 3000,
      contribution: 250,
      interestRate: 3.5,
      duration: 25,
    };
    dispatch(addProduct(newProduct));
  };

  return (
    <section
      className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
      aria-label="Añadir productos de inversión"
    >
      {Object.entries(productTypes).map(([type, info]) => (
        <button
          key={type}
          onClick={() => handleAddProduct(type as ProductType)}
          className="group relative bg-white border border-gray-300 hover:border-gray-400 text-gray-800 py-3 px-4 rounded-lg transition duration-300 shadow-sm hover:shadow-md flex items-center justify-center h-16 w-full"
          aria-label={`Añadir ${info.title}`}
        >
          <span className="flex items-center text-sm">
            <span className="mr-2 text-lg">{info.emoji}</span>
            <span className="font-medium">Añadir {info.title}</span>
          </span>
          {countByType(type as ProductType) > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {countByType(type as ProductType)}
            </span>
          )}
        </button>
      ))}
    </section>
  );
}
