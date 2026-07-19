"use client";

import React, { useState } from "react";
import { Link2, Check } from "lucide-react";
import { useProducts } from "@/store";

export default function ShareButton() {
  const { products } = useProducts();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const encoded = btoa(encodeURIComponent(JSON.stringify(products)));
    const url = `${location.origin}${location.pathname}#s=${encoded}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copia el enlace:", url);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-sm font-medium text-white bg-leaf hover:bg-leaf/90 px-4 py-2 rounded-full shadow-sm transition-[background-color,scale] duration-200 active:scale-[0.97]"
      aria-live="polite"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" aria-hidden="true" /> Enlace copiado
        </>
      ) : (
        <>
          <Link2 className="w-4 h-4" aria-hidden="true" /> Compartir escenario
        </>
      )}
    </button>
  );
}
