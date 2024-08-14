"use client";

import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../store";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = useAppSelector((state) => state.calculator.products);
  const lastProductRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (products.length > 0 && lastProductRef.current) {
      lastProductRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [products]);

  return (
    <section className="w-full" aria-label="Lista de productos de inversión">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={index === products.length - 1 ? lastProductRef : null}
            className="w-full"
          >
            <ProductCard productDetails={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
