import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IntroductionSection from "@/components/IntroductionSection";
import ProductButtons from "@/components/ProductButtons";
import ProductList from "@/components/ProductList";
import ProductsResult from "@/components/ProductsResult";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calculadora de interés compuesto: maximiza tus ganancias financieras",
    description: "Calcula el interés compuesto de tus productos de inversión de manera sencilla. Desde fondos de inversión hasta planes de pensión, haz crecer tu dinero con nuestra herramienta.",
};

export default function CalculatorPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
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
            <Footer />
        </div>
    );
}
