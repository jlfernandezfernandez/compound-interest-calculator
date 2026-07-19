import IntroductionSection from "@/components/IntroductionSection";
import ProductButtons from "@/components/ProductButtons";
import ProductList from "@/components/ProductList";
import FAQSection from "@/components/FAQSection";
import SchemaOrg from "@/components/SchemaOrg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Calculadora de Interés Compuesto | Simulador Gratuito de Inversiones",
  description:
    "Calcula el interés compuesto de tus inversiones ✓ Fondos indexados, planes de pensiones y cuentas remuneradas ✓ Resultados instantáneos y gráficos",
  keywords:
    "calculadora interés compuesto, simulador inversiones, calculadora rendimiento inversiones, interés compuesto calculator, calculadora intereses, rentabilidad inversiones",
  alternates: {
    canonical: "https://jlfernandezfernandez.github.io/compound-interest-calculator/calculadora-interes-compuesto",
  },
  openGraph: {
    title: "Calculadora de Interés Compuesto | Simulador Gratuito",
    description:
      "Calcula el interés compuesto de tus inversiones con nuestro simulador gratuito. Resultados instantáneos y gráficos detallados.",
    url: "https://jlfernandezfernandez.github.io/compound-interest-calculator/calculadora-interes-compuesto",
    siteName: "Gana con Interés",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Interés Compuesto | Simulador Gratuito",
    description:
      "Calcula el interés compuesto de tus inversiones con nuestro simulador gratuito. Resultados instantáneos y gráficos detallados.",
  },
};

export default function CalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SchemaOrg />
      <IntroductionSection />
      <main className="flex-grow">
        <ProductButtons />
        <ProductList />
        <FAQSection />
      </main>
    </div>
  );
}
