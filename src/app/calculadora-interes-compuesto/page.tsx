import FinalSection from "@/components/FinalSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IntroductionSection from "@/components/IntroductionSection";
import ProductButtons from "@/components/ProductButtons";
import ProductList from "@/components/ProductList";
import ProductsResult from "@/components/ProductsResult";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calculadora de Interés Compuesto Avanzada - Maximiza tus Inversiones",
    description: "Descubre la calculadora de interés compuesto más completa y elegante. Con opciones únicas para fondos de inversión, planes de pensión y cuentas remuneradas. Analiza tus inversiones de manera individual o conjunta y toma decisiones informadas para crecer tu patrimonio. Única en su clase, diseñada para inversores exigentes que buscan optimizar sus rendimientos financieros.",
};

export default function CalculatorPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <div className="flex flex-col p-3 font-body">
                    <main className="flex flex-col items-center w-full overflow-auto">
                        <IntroductionSection />
                        <ProductButtons />
                        <ProductList />
                        <ProductsResult />
                    </main>
                </div>
            </div>
            <div className="mt-auto mb-4">
                <FinalSection />
            </div>
            <Footer />
        </div>
    );
}
