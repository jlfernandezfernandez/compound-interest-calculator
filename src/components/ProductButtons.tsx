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
      contributionFrequency: 12,
    };
    addProduct(newProduct);
    requestAnimationFrame(() =>
      document.getElementById(newProduct.id)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      })
    );
  };

  return (
    <section
      className="mb-8 flex flex-wrap justify-center gap-3"
      aria-label="Añadir productos de inversión"
    >
      {(Object.keys(productTypes) as ProductType[]).map((type) => {
        const info = productTypes[type];
        const count = countByType(type);
        return (
          <button
            key={type}
            onClick={() => handleAddProduct(type)}
            className="bg-white border border-gray-300 hover:border-leaf hover:bg-leaf-soft/40 text-ink py-2.5 px-4 rounded-full transition-[border-color,background-color,box-shadow,scale] duration-200 ease-out shadow-sm hover:shadow-md active:scale-[0.97] inline-flex items-center gap-2 text-sm"
            aria-label={`Añadir ${info.title}`}
          >
            <span className="text-base" aria-hidden="true">
              {info.emoji}
            </span>
            <span className="font-medium">Añadir {info.title}</span>
            {count > 0 && (
              <span className="bg-leaf text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        );
      })}
    </section>
  );
}
