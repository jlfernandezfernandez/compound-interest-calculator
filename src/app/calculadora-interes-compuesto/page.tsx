// app/calculadora-interes-compuesto/page.tsx

import IntroductionSection from "@/components/IntroductionSection";
import ProductButtons from "@/components/ProductButtons";
import ProductList from "@/components/ProductList";
import ProductsResult from "@/components/ProductsResult";
import FinalSection from "@/components/FinalSection";
import FAQSection from "@/components/FAQSection";
import SchemaOrg from "@/components/SchemaOrg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Calculadora de Interés Compuesto 2025 | Simulador Gratuito de Inversiones",
  description:
    "Calcula el interés compuesto de tus inversiones ✓ Simulador actualizado 2025 ✓ Fondos indexados, planes de pensiones y cuentas remuneradas ✓ Resultados instantáneos y gráficos",
  keywords:
    "calculadora interés compuesto, simulador inversiones, calculadora rendimiento inversiones, interés compuesto calculator, calculadora intereses, rentabilidad inversiones",
  alternates: {
    canonical: "https://www.ganaconinteres.com/calculadora-interes-compuesto",
  },
  openGraph: {
    title: "Calculadora de Interés Compuesto 2025 | Simulador Gratuito",
    description:
      "Calcula el interés compuesto de tus inversiones con nuestro simulador gratuito. Resultados instantáneos y gráficos detallados.",
    url: "https://www.ganaconinteres.com/calculadora-interes-compuesto",
    siteName: "Gana con Interés",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Interés Compuesto 2025 | Simulador Gratuito",
    description:
      "Calcula el interés compuesto de tus inversiones con nuestro simulador gratuito. Resultados instantáneos y gráficos detallados.",
  },
};

export default function CalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SchemaOrg
        url="https://www.ganaconinteres.com/calculadora-interes-compuesto"
        title="Calculadora de Interés Compuesto 2025 | Simulador Gratuito de Inversiones"
        description="Calcula el interés compuesto de tus inversiones ✓ Simulador actualizado 2025 ✓ Fondos indexados, planes de pensiones y cuentas remuneradas ✓ Resultados instantáneos y gráficos"
      />
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
