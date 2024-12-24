// app/calculadora-interes-compuesto/page.tsx

import IntroductionSection from "@/components/IntroductionSection";
import ProductButtons from "@/components/ProductButtons";
import ProductList from "@/components/ProductList";
import ProductsResult from "@/components/ProductsResult";
import FinalSection from "@/components/FinalSection";
import FAQSection from "@/components/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Calculadora de Interés Compuesto 2025 | Simulador Gratuito de Inversiones",
  description:
    "Calcula el interés compuesto de tus inversiones ✓ Simulador actualizado 2025 ✓ Fondos indexados, planes de pensiones y cuentas remuneradas ✓ Resultados instantáneos y gráficos",
  keywords:
    "calculadora interés compuesto, simulador inversiones, calculadora rendimiento inversiones, interés compuesto calculator, calculadora intereses",
};

export default function CalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <IntroductionSection />
      <main className="flex-grow">
        <ProductButtons />
        <ProductList />
        <ProductsResult />
        <FAQSection />
      </main>
      <FinalSection />
    </div>
  );
}
