// app/calculadora-interes-compuesto/page.tsx

import IntroductionSection from "@/components/IntroductionSection";
import ProductButtons from "@/components/ProductButtons";
import ProductList from "@/components/ProductList";
import ProductsResult from "@/components/ProductsResult";
import FinalSection from "@/components/FinalSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Interés Compuesto Avanzada - Maximiza tus Inversiones",
  description:
    "Descubre la calculadora de interés compuesto más completa. Analiza fondos de inversión, planes de pensión y cuentas remuneradas. Optimiza tus rendimientos financieros con nuestra herramienta única.",
};

export default function CalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen max-w-8xl mx-auto ">
      <IntroductionSection />
      <main className="flex-grow">
        <ProductButtons />
        <ProductList />
        <ProductsResult />
      </main>
      <FinalSection />
    </div>
  );
}
