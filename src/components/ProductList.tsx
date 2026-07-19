"use client";

import React from "react";
import { useProducts } from "@/store";
import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";
import { SummaryBand, GrowthAnalytics } from "./ProductsResult";

export default function ProductList() {
  const { products } = useProducts();

  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-8">
      <SummaryBand />
      <section
        className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6"
        aria-label="Lista de productos de inversión"
      >
        {products.map((product) => (
          <div key={product.id} id={product.id} className="w-full">
            <ProductCard productDetails={product} />
          </div>
        ))}
      </section>
      <GrowthAnalytics />
    </div>
  );
}
