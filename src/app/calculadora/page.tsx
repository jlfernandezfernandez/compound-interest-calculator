import IntroductionSection from "@/components/IntroductionSection";
import ProductButtons from "@/components/ProductButtons";
import ProductList from "@/components/ProductList";
import ProductsResult from "@/components/ProductsResult";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Calculadora de interés compuesto",
    description: "Calcula el interés compuesto de todos tus productos de inversión de forma sencilla. Desde fondos de inversión, fondos indexados, planes de pensión hasta cuentas de ahorros.",
};

export default function CalculatorPage() {
    return (
        <div className="flex flex-col min-h-screen p-5 bg-gradient-radial font-body h-full mb-20">
            <div className="flex justify-between items-start w-full">
                <Link href="/">
                    Inicio
                </Link>
            </div>
            <main className="flex flex-col items-center w-full h-full">
                <IntroductionSection />
                <ProductButtons />
                <ProductList />
                <ProductsResult />
            </main>
            {/*<div className="mt-10 bg-gray-500">
                <a href="https://www.buymeacoffee.com/jordiluiss" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                        alt="Buy Me A Coffee"
                        width={217}
                        height={60}
                        priority
                    />
                </a>
            </div>*/}
        </div>
    );
}
