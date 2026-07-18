// components/Footer.tsx

import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-leaf-soft/60 text-ink py-8 px-6 mt-auto border-t border-gray-200"
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Gana con Interés. Calculadora de
          interés compuesto.
        </p>
        <a
          href="https://github.com/jlfernandezfernandez/compound-interest-calculator"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-leaf transition-colors"
          aria-label="Código fuente en GitHub (se abre en una nueva ventana)"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
