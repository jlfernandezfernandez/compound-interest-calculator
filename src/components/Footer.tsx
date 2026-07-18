// components/Footer.tsx

import React from "react";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-gray-100 text-gray-800 py-8 px-6 mt-auto"
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Gana con Interés. Calculadora de
          interés compuesto.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/calculadora-interes-compuesto"
            className="text-sm hover:text-blue-600 transition-colors"
          >
            Calculadora
          </Link>
          <a
            href="https://github.com/jlfernandezfernandez/compound-interest-calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-blue-600 transition-colors flex items-center"
            aria-label="Código fuente en GitHub (se abre en una nueva ventana)"
          >
            <Github className="h-4 w-4 mr-1" aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
