import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quieres saber cómo construyo mi cartera de productos financieros? Con datos y ejemplos.",
    description: "Aquí te explico mi caso personal. Cómo invierto, qué cuentas remuneradas tengo y qué plan de pensiones tengo. Con cifras reales de intereses y cantidades.",
};

export default function MyInversionPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow justify-center items-center p-4 mb-2">
                <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">Página en Construcción 🚧</h2>
                </div>
            </div>
            <Footer />
        </div>
    );
}
