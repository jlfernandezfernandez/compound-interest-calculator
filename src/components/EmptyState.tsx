"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { useProducts } from "@/store";
import { ProductDetails } from "@/financial_products/productTypes";

const EXAMPLE: ProductDetails[] = [
  {
    id: "",
    type: "inversion",
    name: "Fondo indexado",
    initialAmount: 10000,
    contribution: 300,
    interestRate: 7,
    duration: 30,
    contributionFrequency: 12,
  },
  {
    id: "",
    type: "cuenta",
    name: "Colchón de ahorro",
    initialAmount: 5000,
    contribution: 100,
    interestRate: 2.5,
    duration: 30,
    contributionFrequency: 12,
  },
];

export default function EmptyState() {
  const { addProduct } = useProducts();

  const loadExample = () =>
    EXAMPLE.forEach((product) =>
      addProduct({ ...product, id: crypto.randomUUID() })
    );

  return (
    <div className="text-center border border-dashed border-gray-300 rounded-xl py-12 px-6 bg-white/60">
      <p className="text-4xl mb-3" aria-hidden="true">
        🌱
      </p>
      <h2 className="font-display font-semibold text-lg text-ink mb-1">
        Empieza tu simulación
      </h2>
      <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
        Añade un producto con los botones de arriba, o carga un ejemplo para
        ver cómo crece el dinero con el tiempo.
      </p>
      <button
        onClick={loadExample}
        className="inline-flex items-center gap-2 text-sm font-medium text-white bg-leaf hover:bg-leaf/90 px-5 py-2.5 rounded-full transition-[background-color,scale] duration-200 active:scale-[0.97]"
      >
        <Sparkles className="w-4 h-4" aria-hidden="true" />
        Cargar ejemplo: 300 €/mes al 7 % durante 30 años
      </button>
    </div>
  );
}
