// app/mejora-tus-resultados/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import ImproveResultsHeader from "@/components/ImproveResultsHeader";
import ImproveResultsCompoundInterest from "@/components/ImproveResultsCompoundInterest";
import ImproveResultsInvestmentTool from "@/components/ImproveResultsInvestmentTool";

export const metadata: Metadata = {
  title:
    "Maximiza tus Ganancias: Aprovecha el Interés Compuesto | Gana con Interés",
  description:
    "Descubre cómo multiplicar tus ahorros con el poder del interés compuesto. Aprende sobre MyInvestor, Micappital y Revolut para optimizar tus inversiones y alcanzar la libertad financiera.",
  keywords:
    "interés compuesto, inversiones, MyInvestor, Micappital, Revolut, libertad financiera",
};

export default function ImproveResultsPage() {
  return (
    <main className="max-w-5xl mx-auto mb-14">
      <div className="space-y-12">
        <ImproveResultsHeader />
        <ImproveResultsCompoundInterest />
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">
            Herramientas de Inversión Recomendadas 🛠️
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImproveResultsInvestmentTool
              title="MyInvestor"
              emoji="🏦"
              description="Plataforma líder en España para diversificar tu cartera con fondos de inversión de bajo coste."
              link="https://www.myinvestor.es"
              linkText="Únete a MyInvestor"
            />
            <ImproveResultsInvestmentTool
              title="Micappital"
              emoji="💼"
              description="Gestión financiera personalizada que utiliza IA para optimizar tu cartera."
              link="https://www.micappital.com"
              linkText="Descubre Micappital"
            />
            <ImproveResultsInvestmentTool
              title="Revolut"
              emoji="💳"
              description="Banco digital con cuentas multidivisa y opciones de inversión en acciones y criptomonedas."
              link="https://www.revolut.com"
              linkText="Explora Revolut"
            />
          </div>
        </section>

        <section className="text-center border-t border-gray-200 pt-8">
          <h2 className="text-base font-semibold text-gray-800 mb-4">
            ¿Quieres ver cómo aplico estas estrategias en mi propia cartera de
            inversión?{" "}
          </h2>
          <Link
            href="/mejora-tus-resultados/como-invierto"
            className="inline-block bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300 text-sm font-medium"
          >
            Explora Mi Estrategia de Inversión
          </Link>
        </section>
      </div>
    </main>
  );
}
