"use client";

import React from "react";
import { useProducts } from "@/store";
import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";
import ProductsResult from "./ProductsResult";

export default function ProductList() {
  const { products } = useProducts();

  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:gap-8 lg:items-start">
      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6"
        aria-label="Lista de productos de inversión"
      >
        {products.map((product) => (
          <div key={product.id} id={product.id} className="w-full">
            <ProductCard productDetails={product} />
          </div>
        ))}
      </section>
      <aside className="lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
        <ProductsResult />
      </aside>
    </div>
  );
}
