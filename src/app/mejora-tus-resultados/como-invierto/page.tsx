import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mi Estrategia de Inversión Personal: Maximizando el Interés Compuesto",
    description: "Descubre mi enfoque personal para distribuir inversiones entre planes de pensiones, fondos de inversión y cuentas remuneradas para aprovechar al máximo el interés compuesto.",
};

export default function MyInversionPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow justify-center items-center">
                <div className="max-w-5xl p-4 md:p-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">Cómo uso el Interés Compuesto para Maximizar mis Inversiones 🏗️</h1>
                    <p className="text-lg text-center mb-4">Aquí te comparto mi estrategia personal para maximizar mis ahorros e inversiones utilizando el poder del interés compuesto 💸.</p>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Mi Estrategia de Inversión 📊</h2>
                        <p>Mensualmente, destino el 20% de mi sueldo a diferentes productos de inversión. Aquí está cómo lo distribuyo:</p>
                        <ul className="list-disc list-inside space-y-2 my-4 ml-2">
                            <li><strong>10%</strong> a un plan de pensiones indexado al S&P 500 con MyInvestor 📈.</li>
                            <li><strong>45%</strong> a fondos de inversión gestionados por MiCappital 🏦.</li>
                            <li><strong>45%</strong> a una cuenta remunerada con Revolut 💰.</li>
                        </ul>
                        <p>Esta distribución me permite construir un plan de pensiones privado, mantener liquidez y aprovechar las altas rentabilidades de los fondos de inversión.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Herramientas que Utilizo 🔧</h2>
                        <p>Para implementar mi estrategia, hago uso de:</p>
                        <ul className="list-disc list-inside space-y-2 my-4 ">
                            <li><strong>MyInvestor</strong> para mi plan de pensiones y fondos de inversión, elegidos por sus bajas comisiones 🚀.</li>
                            <li><strong>MiCappital</strong>, que me asesora en la selección y gestión de mis fondos de inversión 👥.</li>
                            <li><strong>Revolut</strong> para mi cuenta remunerada, aprovechando su interés diario en el plan gratuito 🌐.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">El Poder del Interés Compuesto ⚙️</h2>
                        <p>El interés compuesto es el motor de mi estrategia de inversión. Permite que mis ahorros crezcan exponencialmente a lo largo del tiempo, gracias a la reinversión de los intereses ganados. Este efecto se maximiza con las aportaciones mensuales, diversificando mis inversiones y minimizando el riesgo.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Mis Rentabilidades 📈</h2>
                        <p>Gracias a esta estrategia, he logrado:</p>
                        <ul className="list-disc list-inside space-y-2 my-4 ml-2">
                            <li><strong>Plan de Pensiones:</strong> Una rentabilidad del 4.67%.</li>
                            <li><strong>Fondos de Inversión:</strong> Una rentabilidad del 9.75%.</li>
                            <li><strong>Cuenta Remunerada:</strong> Una rentabilidad anual del 3.10%.</li>
                        </ul>
                    </section>

                    <div className="text-center mt-8 mb-2">
                        <Link href="/calculadora-interes-compuesto" className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full transition duration-300">
                        Simula tu interés compuesto
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
