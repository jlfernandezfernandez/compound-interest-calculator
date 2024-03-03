import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Maximiza tus Ganancias: Aprovecha el Interés Compuesto con MyInvestor, Micappital y Revolut",
    description: "Eleva tu estrategia de inversión y maximiza tus rendimientos con el poder del interés compuesto. Descubre cómo MyInvestor, Micappital y Revolut pueden transformar tus finanzas.",
};

export default function ImproveResultsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow justify-center items-center p-4 mb-2">

                <div className="max-w-5xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-4">Maximiza tus Inversiones y Aprovecha el Poder del Interés Compuesto 💼</h1>
                    <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-5">En el camino hacia la libertad financiera, cada decisión cuenta. Aquí te muestro cómo el <strong>interés compuesto</strong>, combinado con las <strong>herramientas adecuadas</strong> como MyInvestor, Micappital, y Revolut, puede ser tu mejor aliado para maximizar tus inversiones. 🚀</p>
                    <div className="p-4 mb-6 flex flex-col sm:flex-row justify-between items-center bg-blue-50 border-l-4 border-blue-500">
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-0">¿Quieres ver con más detalle los productos que tengo, intereses y cantidades? 🔍</p>
                        <Link href="/mejora-tus-resultados/como-invierto" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-300">
                            Descubre Más
                        </Link>
                    </div>
                    <div className="space-y-8">

                        <div>
                            <h2 className="text-2xl font-bold mb-1">MyInvestor 🏦</h2>
                            <p>Con una selección de fondos de inversión de bajo coste y alta rentabilidad, MyInvestor se posiciona como una plataforma esencial para diversificar tu cartera. Ideal para inversores que buscan opciones variadas.</p>
                            <br />
                            <p>Gracias a la <strong>diversidad de productos financieros</strong>, a lo bien que funcionan sus planes de pensión y a las <strong>bajas comisiones</strong>, es el banco <strong>donde tengo mi cartera de inversión y mi plan de pensiones</strong>.</p>
                            <br />
                            <div className="p-4 border border-gray-200 rounded-lg shadow-lg">
                                <p><strong>✨ Bono de bienvenida.</strong> Obtén 20€ al abrir una cuenta y cumplir una de las siguientes condiciones: ✨</p>
                                <ul className="list-disc list-inside mt-1 ml-4">
                                    <li>100€ invertidos en fondos, carteras indexadas (roboadvisor), acciones o planes de pensión.</li>
                                    <li>1.000€ en la cuenta.</li>
                                    <li>Un depósito contratado.</li>
                                </ul>

                            </div>
                            <br />
                            <a href="https://myinvestor.page.link/decXeBGbKbyMkiJEA" className="text-blue-500 hover:underline">Únete a MyInvestor</a>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-1">Micappital 💼</h2>
                            <p>Optimiza tus inversiones con Micappital, una startup que ofrece gestión financiera personalizada, alineando tus inversiones con tus metas financieras, gracias a su equipo de expertos.</p>
                            <br />
                            <p><strong>Ellos buscan los mejores fondos de inversión para ti</strong> en base a tu perfil, ayudándote a crear una <strong>cartera diversificada y balanceada</strong>. Personalmente, estoy muy contento y gracias a ellos estoy consiguiendo un 10% de rentabilidad anual.</p>
                            <br />
                            <div className="p-4 border border-gray-200 rounded-lg shadow-lg">
                                <p><strong>✨ Para que lo pruebes:</strong> Recibe 50€ en comisiones al usar este enlace. ✨</p>
                                <br />
                                <p>Ellos cobran 2,5€/mes por cada 1.000€ que gestionen (Máximo de 25€/mes), <strong>siempre que ese mes te hayan hecho ganar dinero.</strong></p>
                            </div>
                            <br />
                            <a href="https://www.micappital.com?referal=jordiluisgZ2kOJ" className="text-blue-500 hover:underline">Descubre Micappital</a>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-1">Revolut 💳</h2>
                            <p>Revolut transforma la gestión diaria de tu dinero ofreciendo una cuenta remunerada con tasas competitivas, incluso en su plan básico. Una excelente herramienta para ahorrar e invertir.</p>
                            <br />
                            <p>Aquí tengo <strong>contratada mi cuenta remunerada</strong>, la cual me ofrece una rentabilidad anual del 3.11%, pagada cada día. La <strong>cuenta es gratuita</strong> y es una excelente manera de luchar contra la inflacción.</p>
                            <br />
                            <p>Y sí, cuentas con IBAN español y toda la protección que otorga cualquier otro banco español.</p>
                            <br />
                            <a href="https://revolut.com/referral/?referral-code=jordilftw5!FEB2-24-VR-ES" className="text-blue-500 hover:underline">Explora Revolut</a>
                        </div>

                    </div>
                    <div className="text-center p-6 mt-8 bg-blue-100 rounded-lg shadow">
                        <p className="text-xl text-gray-700">¿Quieres ver cómo el interés compuesto ha transformado mis finanzas?</p>
                        <Link href="/mejora-tus-resultados/como-invierto" className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Explora Cómo Invierto
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
