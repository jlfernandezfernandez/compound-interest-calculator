// components/Footer.tsx

import React from "react";
import Link from "next/link";
import BuyMeACoffeeButton from "./BuyMeACoffeButton";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-gray-100 text-gray-800 py-8 px-6 mt-auto"
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Información del sitio */}
          <div>
            <h3 className="font-bold text-lg mb-4" id="footer-info">
              Gana con Interés
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Herramientas gratuitas para ayudarte a entender y maximizar el
              poder del interés compuesto en tus inversiones.
            </p>
            <BuyMeACoffeeButton />
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4" id="footer-links">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2" aria-labelledby="footer-links">
              <li>
                <Link
                  href="/calculadora-interes-compuesto"
                  className="text-sm hover:text-blue-600 transition-colors"
                >
                  Calculadora
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-blue-600 transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Otros proyectos */}
          <div>
            <h3 className="font-bold text-lg mb-4" id="footer-projects">
              Otros proyectos
            </h3>
            <ul className="space-y-2" aria-labelledby="footer-projects">
              <li>
                <Link
                  href="https://www.buildyoursetup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-600 transition-colors flex items-center"
                  aria-label="Visita BuildYourSetup.com (se abre en una nueva ventana)"
                >
                  <span className="mr-1" aria-hidden="true">
                    🖥️
                  </span>{" "}
                  BuildYourSetup.com
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/jlfernandezfernandez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-600 transition-colors flex items-center"
                  aria-label="Visita mi perfil de GitHub (se abre en una nueva ventana)"
                >
                  <Github className="h-4 w-4 mr-1" aria-hidden="true" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea de copyright */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-sm text-gray-600 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Gana con Interés. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
