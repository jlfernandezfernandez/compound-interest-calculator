import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IntroductionSection from "@/components/IntroductionSection";
import ProductButtons from "@/components/ProductButtons";
import ProductList from "@/components/ProductList";
import ProductsResult from "@/components/ProductsResult";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calculadora de interés compuesto",
    description: "Calcula el interés compuesto de todos tus productos de inversión de forma sencilla. Desde fondos de inversión, fondos indexados, planes de pensión hasta cuentas de ahorros.",
};

export default function CalculatorPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-grow">
                <div className="flex flex-col p-5 font-body">
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
