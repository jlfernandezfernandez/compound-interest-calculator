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
    <section
      className="w-full space-y-8"
      aria-label="Lista de productos de inversión"
    >
      {products.map((product, index) => (
        <div
          key={product.id}
          ref={index === products.length - 1 ? lastProductRef : null}
        >
          <ProductCard productDetails={product} />
        </div>
      ))}
    </section>
  );
}
