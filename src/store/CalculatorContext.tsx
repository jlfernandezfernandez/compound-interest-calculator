"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductDetails, YearlyTotals } from "@/financial_products/productTypes";

interface CalculatorContextType {
  products: ProductDetails[];
  addProduct: (product: ProductDetails) => void;
  removeProduct: (id: string) => void;
  updateProduct: (product: ProductDetails) => void;
  updateYearlyTotals: (id: string, yearlyTotals: YearlyTotals[]) => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

const STORAGE_KEY = "calculator-storage";

export const CalculatorProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProducts(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse calculator storage", e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }
  }, [products, isInitialized]);

  const addProduct = (product: ProductDetails) => {
    setProducts((prev) => [...prev, product]);
  };

  const removeProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const updateProduct = (product: ProductDetails) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? product : p))
    );
  };

  const updateYearlyTotals = (id: string, yearlyTotals: YearlyTotals[]) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, yearlyTotals } : p))
    );
  };

  return (
    <CalculatorContext.Provider
      value={{ products, addProduct, removeProduct, updateProduct, updateYearlyTotals }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error("useCalculator must be used within a CalculatorProvider");
  }
  return context;
};
