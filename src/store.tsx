"use client";

import { useSyncExternalStore } from "react";
import { ProductDetails } from "@/financial_products/productTypes";

const STORAGE_KEY = "products";
const EMPTY: ProductDetails[] = [];

let products: ProductDetails[] | null = null;
const listeners = new Set<() => void>();

function load(): ProductDetails[] {
  try {
    // Escenario compartido por URL: gana sobre lo guardado y se persiste
    const shared = new URLSearchParams(location.hash.slice(1)).get("s");
    if (shared) {
      const products = JSON.parse(decodeURIComponent(atob(shared)));
      if (Array.isArray(products)) {
        history.replaceState(null, "", location.pathname);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
        return products;
      }
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return EMPTY;
}

function getSnapshot(): ProductDetails[] {
  if (products === null) products = load();
  return products;
}

function getServerSnapshot(): ProductDetails[] {
  return EMPTY;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function set(next: ProductDetails[]) {
  products = next;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  listeners.forEach((listener) => listener());
}

export function useProducts() {
  const current = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  return {
    products: current,
    addProduct: (product: ProductDetails) => set([...getSnapshot(), product]),
    removeProduct: (id: string) =>
      set(getSnapshot().filter((product) => product.id !== id)),
    updateProduct: (product: ProductDetails) =>
      set(
        getSnapshot().map((p) => (p.id === product.id ? product : p))
      ),
  };
}
