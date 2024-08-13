// app/calculadora-interes-compuesto/page.tsx

import FinalSection from "@/components/FinalSection";
import IntroductionSection from "@/components/IntroductionSection";
import ProductButtons from "@/components/ProductButtons";
import ProductList from "@/components/ProductList";
import ProductsResult from "@/components/ProductsResult";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Interés Compuesto Avanzada - Maximiza tus Inversiones",
  description:
    "Descubre la calculadora de interés compuesto más completa. Analiza fondos de inversión, planes de pensión y cuentas remuneradas. Optimiza tus rendimientos financieros con nuestra herramienta única.",
};

export default function CalculatorPage() {
  return (
    <>
      <main className="flex-grow">
        <div className="flex flex-col p-3 font-body max-w-7xl mx-auto">
          <div className="flex flex-col items-center w-full overflow-auto">
            <IntroductionSection />
            <ProductButtons />
            <ProductList />
            <ProductsResult />
          </div>
        </div>
      </main>
      <FinalSection />
    </>
  );
}
