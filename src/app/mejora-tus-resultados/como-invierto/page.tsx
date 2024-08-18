// app/mejora-tus-resultados/como-invierto/page.tsx

import { Metadata } from "next";
import InvestmentStrategyHeader from "@/components/InvestmentStrategyHeader";
import MyInvestmentStrategy from "@/components/MyInvestmentStrategy";
import InvestmentTools from "@/components/InvestmentTools";
import CompoundInterestExplanation from "@/components/CompoundInterestExplanation";
import MyProfits from "@/components/MyProfits";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Mi Estrategia de Inversión: Maximizando el Interés Compuesto",
  description:
    "Descubre mi enfoque personal para distribuir inversiones entre planes de pensiones, fondos de inversión y cuentas remuneradas para aprovechar al máximo el interés compuesto.",
};

export default function MyInversionPage() {
  return (
    <main className="max-w-5xl mx-auto mb-14">
      <div className="space-y-12">
        <InvestmentStrategyHeader />
        <MyInvestmentStrategy />
        <InvestmentTools />
        <CompoundInterestExplanation />
        <MyProfits />
        <CTASection />
      </div>
    </main>
  );
}
