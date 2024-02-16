import IntroductionSection from "@/components/IntroductionSection";
import ProductButtons from "@/components/ProductButtons";
import ProductList from "@/components/ProductList";
import ProductsResult from "@/components/ProductsResult";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Calculadora de interés compuesto",
    description: "Calcula el interés compuesto de todos tus productos de inversión de forma sencillla. Desde fondos de inversión, fondos indexados, planes de pensión hasta cuentas de ahorros.",
  };

export default function CalculatorPage() {
    return (
        <div className="flex flex-col min-h-screen p-5 bg-gradient-radial font-body">
            <div className="flex justify-between items-start w-full">
                <Link href="/" className="inline-block bg-gradient-radial py-4 px-6 rounded">
                    Inicio
                </Link>
            </div>
            <main className="flex flex-col items-center w-full h-full">
                <IntroductionSection />
                <ProductButtons />
                <ProductList />
                <ProductsResult />
            </main>
        </div>
    );
}
