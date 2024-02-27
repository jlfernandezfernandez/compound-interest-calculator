import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Maximiza tus Inversiones con MyInvestor, Micappital y Revolut",
    description: "Explora cómo MyInvestor, Micappital y Revolut pueden revolucionar tu estrategia de inversión. Aprovecha nuestras recomendaciones expertas para optimizar tus fondos de inversión, gestión financiera y cuentas remuneradas. Únete y potencia tus rendimientos hoy.",
};

export default function ImproveResultsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow justify-center items-center p-4">
                <div className="max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-4">Maximiza tus Inversiones 💼</h1>
                    <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-6">Descubre herramientas y servicios clave para elevar tus inversiones al siguiente nivel. 🚀</p>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold">MyInvestor 🏦</h2>
                            <p>Con una selección de fondos de inversión de bajo coste y alta rentabilidad, MyInvestor se posiciona como una plataforma esencial para diversificar tu cartera. Ideal para inversores que buscan opciones variadas.</p>
                            <p><strong>Bono de bienvenida:</strong> Obtén 20€ al abrir una cuenta y cumplir con ciertas condiciones. <em>Verifica en la web para más detalles.</em></p>
                            <a href="https://myinvestor.page.link/decXeBGbKbyMkiJEA" className="text-blue-500 hover:underline">Únete a MyInvestor</a>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">Micappital 💼</h2>
                            <p>Optimiza tus inversiones con Micappital, una startup que ofrece gestión financiera personalizada, alineando tus inversiones con tus metas financieras, gracias a su equipo de expertos.</p>
                            <p><strong>Oferta especial:</strong> Recibe 50€ en comisiones al usar este enlace. <em>Consulta condiciones en su sitio.</em></p>
                            <a href="https://www.micappital.com?referal=jordiluisgZ2kOJ" className="text-blue-500 hover:underline">Descubre Micappital</a>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">Revolut 💳</h2>
                            <p>Revolut transforma la gestión diaria de tu dinero ofreciendo una cuenta remunerada con tasas competitivas, incluso en su plan básico. Una excelente herramienta para ahorrar e invertir.</p>
                            <a href="https://revolut.com/referral/?referral-code=jordilftw5!FEB2-24-VR-ES" className="text-blue-500 hover:underline">Explora Revolut</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
