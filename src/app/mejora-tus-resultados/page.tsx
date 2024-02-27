import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Maximiza tus Inversiones con MyInvestor, Micappital y Revolut",
    description: "Descubre cómo MyInvestor, Micappital y Revolut pueden transformar tu estrategia de inversión. Aprende a optimizar tus fondos de inversión, gestión financiera y cuentas remuneradas con nuestras recomendaciones expertas. Únete a nosotros y empieza a maximizar tus rendimientos hoy.",
};

export default function ImproveResultsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow justify-center items-center p-4">
                <div className="max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-4">Maximiza tus Inversiones</h1>
                    <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-6">Descubre las herramientas y servicios que te ayudarán a llevar tus inversiones al siguiente nivel.</p>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold">MyInvestor</h2>
                            <p>MyInvestor es una plataforma de inversión líder que te permite acceder a una amplia gama de fondos de inversión, incluyendo opciones de bajo coste y alta rentabilidad. Perfecta para quienes buscan diversificar su cartera.</p>
                            <p><strong>Bono de bienvenida:</strong> Puedes llevarte 20€ si abres una cuenta en MyInvestor a través de este enlace, trayendo 1.000€ a tu cuenta, contratando un depósito o invirtiendo 100€ en alguno de sus productos de inversión.</p>
                            <a href="https://myinvestor.page.link/decXeBGbKbyMkiJEA" className="text-blue-500 hover:underline">Únete a MyInvestor</a>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">Micappital</h2>
                            <p>Micappital es una startup de gestión financiera personalizada que optimiza tus inversiones basándose en tus objetivos financieros. Su equipo de expertos trabaja contigo para maximizar tus rendimientos.</p>
                            <p><strong>Oferta especial:</strong> Utiliza este link y te llevarás 50€ en comisiones.</p>
                            <a href="https://www.micappital.com?referal=jordiluisgZ2kOJ" className="text-blue-500 hover:underline">Descubre Micappital</a>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">Revolut</h2>
                            <p>Revolut ofrece una cuenta remunerada con un interesante 3.11% en su plan básico, lo que la convierte en una opción excelente para gestionar tu dinero diariamente y obtener rendimientos de tus ahorros.</p>
                            <a href="https://revolut.com/referral/?referral-code=jordilftw5!FEB2-24-VR-ES" className="text-blue-500 hover:underline">Explora Revolut</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

