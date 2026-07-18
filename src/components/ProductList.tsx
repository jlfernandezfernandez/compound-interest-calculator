"use client";

import React from "react";
import { useProducts } from "@/store";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const { products } = useProducts();

  return (
    <section className="w-full" aria-label="Lista de productos de inversión">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} id={product.id} className="w-full">
            <ProductCard productDetails={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
