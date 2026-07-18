"use client";

import React from "react";
import { useProducts } from "@/store";
import {
  ProductDetails,
  ProductType,
  productTypes,
} from "@/financial_products/productTypes";

export default function ProductButtons() {
  const { products, addProduct } = useProducts();

  const countByType = (type: ProductType) =>
    products.filter((product) => product.type === type).length;

  const handleAddProduct = (type: ProductType) => {
    const count = countByType(type);
    const newName =
      count === 0
        ? productTypes[type].title
        : `${productTypes[type].title} ${count + 1}`;

    const newProduct: ProductDetails = {
      id: crypto.randomUUID(),
      type: type,
      name: newName,
      initialAmount: 3000,
      contribution: 250,
      interestRate: 3.5,
      duration: 25,
      contributionFrequency: 12, // Monthly by default
    };
    addProduct(newProduct);
    // Scroll a la tarjeta recién creada una vez pintada
    requestAnimationFrame(() =>
      document.getElementById(newProduct.id)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    );
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
            className="group relative bg-white border border-gray-300 hover:border-leaf hover:bg-leaf-soft/40 text-ink py-3 px-4 rounded-lg transition-[border-color,background-color,box-shadow,scale] duration-200 ease-out shadow-sm hover:shadow-md active:scale-[0.97] flex items-center justify-center h-16 w-full"
            aria-label={`Añadir ${info.title}`}
          >
            <span className="flex items-center text-sm">
              <span className="mr-2 text-lg">{info.emoji}</span>
              <span className="font-medium">Añadir {info.title}</span>
            </span>
            {countByType(type) > 0 && (
              <span className="absolute -top-2 -right-2 bg-leaf text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {countByType(type)}
              </span>
            )}
          </button>
        );
      })}
    </section>
  );
}
