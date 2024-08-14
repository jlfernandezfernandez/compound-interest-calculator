"use client";

import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../store";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const products = useAppSelector((state) => state.calculator.products);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.lastElementChild?.scrollIntoView({ behavior: "smooth" });
    }
  }, [products.length]);

  return (
    <section className="w-full" aria-label="Lista de productos de inversión">
      <div
        ref={listRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {products.map((product) => (
          <div key={product.id} className="w-full">
            <ProductCard productDetails={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
