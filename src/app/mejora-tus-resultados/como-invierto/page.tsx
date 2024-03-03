import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { Metadata } from "next";
import MyProfits from "@/components/MyProfits";

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
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter mb-4">Cómo uso el Interés Compuesto para Maximizar mis Inversiones 🏗️</h1>
                    <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-5">Aquí te comparto mi estrategia personal para maximizar mis ahorros e inversiones utilizando el poder del interés compuesto 💸.</p>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Mi Estrategia de Inversión 📊</h2>
                        <div className="ml-1">
                            <p>Mensualmente, destino el 20% de mi sueldo a diferentes productos de inversión. Así es cómo lo distribuyo:</p>
                            <ul className="list-disc list-inside space-y-2 my-4 ml-2">
                                <li><strong>10%</strong> a un plan de pensiones indexado al S&P 500 con MyInvestor 📈.</li>
                                <li><strong>45%</strong> a fondos de inversión y fondos indexados gestionados por MiCappital 🏦.</li>
                                <li><strong>45%</strong> a una cuenta remunerada con Revolut 💰.</li>
                            </ul>
                            <p>Esta distribución me permite construir un plan de pensiones privado, junto a sus beneficios fiscales, mantener liquidez en la cuenta remunerada y aprovechar las altas rentabilidades de los fondos de inversión.</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">Herramientas que Utilizo 🔧</h2>
                        <div className="ml-1">
                            <p>Para implementar mi estrategia, hago uso de:</p>
                            <ul className="list-disc list-inside space-y-2 my-4 ">
                                <li><strong>MyInvestor</strong> para mi plan de pensiones y fondos de inversión, elegidos por sus bajas comisiones 🚀.</li>
                                <li><strong>MiCappital</strong>, que me asesora en la selección y gestión de mis fondos de inversión 👥.</li>
                                <li><strong>Revolut</strong> para mi cuenta remunerada, aprovechando su interés diario en el plan gratuito 🌐.</li>
                            </ul>
                            <p>Antes de llegar a este punto he probado otras herramientas como un roboadvisor, huchas de ahorro, además de haber tenido el plan de pensiones en otro banco. Ahora estoy mucho más a gusto y genero más rentabilidad.</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold mb-4">El Poder del Interés Compuesto ⚙️</h2>
                        <div className="ml-1">
                            <p>Considerado la <strong>&quot;octava maravilla del mundo&quot;</strong>, el interés compuesto es una herramienta clave para crecer tus ahorros. A diferencia del interés simple, el compuesto trabaja poniendo a tus intereses a generar más intereses, creando un efecto acumulativo sorprendente.</p>
                            <h3 className="text-lg md:text-xl font-semibold mt-4 mb-3">Entendiendo la Fórmula Mágica</h3>
                            <div className="my-4 bg-gray-200 p-4 rounded-md">
                                <p className="text-center"><strong>A = P(1 + r/n)<sup>nt</sup></strong></p>
                            </div>

                            <p>Donde:</p>
                            <ul className="list-disc list-inside ml-4 mb-4">
                                <li><strong>A</strong> es el total acumulado (principal + intereses).</li>
                                <li><strong>P</strong> es tu inversión inicial.</li>
                                <li><strong>r</strong> representa la tasa de interés anual en decimal.</li>
                                <li><strong>n</strong> es la frecuencia de capitalización al año.</li>
                                <li><strong>t</strong> son los años de la inversión.</li>
                            </ul>

                            <p>Imagina que inviertes <strong>1.000€</strong> al <strong>5%</strong> de interés anual. Compuesto anualmente durante <strong>10 años</strong>, esto es lo que ocurre:</p>
                            <div className="my-4 bg-gray-200 p-4 rounded-md">
                                <p className="text-center"><strong>A = 1000(1 + 0.05/1)<sup>1×10</sup> ≈ 1.628,89€</strong></p>
                            </div>

                            <p>Este simple ejemplo muestra cómo tu inversión inicial crece más de un 60% sin esfuerzo adicional de tu parte. El secreto está en comenzar lo antes posible y mantener tus ahorros invirtiendo a largo plazo.</p>
                            <p className="mt-2">Con <strong>aportaciones regulares</strong> y el tiempo de tu lado, el interés compuesto puede ser el motor que impulse tus finanzas personales hacia nuevas alturas, permitiéndote alcanzar tus metas financieras y soñar aún más grande.</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <MyProfits />
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
