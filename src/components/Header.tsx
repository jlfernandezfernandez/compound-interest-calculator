"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? "border-black text-black"
      : "border-transparent text-gray-500 hover:text-black";
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/calculadora-interes-compuesto"
            className={`text-sm font-medium transition-colors duration-200 ${isActive(
              "/calculadora-interes-compuesto"
            )}`}
          >
            Calculadora
          </Link>
          <Link
            href="/mejora-tus-resultados"
            className={`text-sm font-medium transition-colors duration-200 ${isActive(
              "/mejora-tus-resultados"
            )}`}
          >
            Mejora tus resultados
          </Link>
        </div>
      </nav>
    </header>
  );
}
