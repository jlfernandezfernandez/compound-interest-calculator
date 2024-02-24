import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ImproveResultsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow justify-center items-center">
                <div className="text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">Próximamente</h1>
                        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400">Sitio web en construcción</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
