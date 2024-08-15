import Link from "next/link";
import { Metadata } from "next";
import { Github } from "lucide-react";
import BuyMeACoffeeButton from "@/components/BuyMeACoffeButton";

export const metadata: Metadata = {
  title: "Sobre Gana Con Interés: Calculadora Simple de Interés Compuesto",
  description:
    "Descubre cómo Gana Con Interés te ayuda a calcular y visualizar fácilmente el crecimiento de tus inversiones con nuestra calculadora de interés compuesto gratuita y sencilla.",
};

export default function AboutPage() {
  return (
    <main className="px-4 max-w-6xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">
        Gana Con Interés: Calculadora Simple de Interés Compuesto 📈
      </h1>
      <p className="text-base sm:text-lg text-gray-700 mb-6">
        Gana Con Interés es tu herramienta gratuita y sencilla para calcular y
        visualizar el poder del interés compuesto en tus inversiones. Ideal para
        planificar tus ahorros en fondos de inversión, cuentas remuneradas y
        planes de pensiones.
      </p>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">
          Nuestra Misión: Simplificar tus Cálculos Financieros 🎯
        </h2>
        <p>
          Nuestra misión es ofrecerte una calculadora de interés compuesto fácil
          de usar y visual para proyectar tus ganancias a largo plazo. Te
          ayudamos a entender el impacto del interés compuesto en tus
          inversiones de manera clara y sencilla.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">
          Características de Nuestra Calculadora 🚀
        </h2>
        <ul className="list-disc list-inside space-y-2 my-3 ml-2">
          <li>Interfaz intuitiva y fácil de usar</li>
          <li>Cálculos instantáneos de interés compuesto</li>
          <li>
            Gráficos claros para visualizar el crecimiento de tus inversiones
          </li>
          <li>Resumen detallado de tu inversión a lo largo del tiempo</li>
          <li>Comparación visual entre diferentes tipos de inversiones</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">
          ¿Por Qué Elegir Gana Con Interés? 🤔
        </h2>
        <ul className="list-disc list-inside space-y-2 my-3 ml-2">
          <li>
            <strong>Simplicidad:</strong> Diseñada para ser fácil de usar, sin
            complicaciones.
          </li>
          <li>
            <strong>Gratuita y Sin Publicidad:</strong> Sin costes ocultos ni
            distracciones.
          </li>
          <li>
            <strong>Visualización Clara:</strong> Gráficos intuitivos que
            muestran el crecimiento de tu inversión.
          </li>
          <li>
            <strong>Versatilidad:</strong> Útil para diferentes tipos de
            inversiones y perfiles de ahorradores.
          </li>
          <li>
            <strong>Educativa:</strong> Te ayuda a comprender mejor el impacto
            del interés compuesto.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">
          Apoya Este Proyecto ❤️
        </h2>
        <p className="mb-4">
          Si encuentras útil Gana Con Interés, considera apoyar su desarrollo y
          mantenimiento. Tu contribución ayuda a mantener esta herramienta
          gratuita y en constante mejora.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-start sm:items-center">
          <BuyMeACoffeeButton />
          <Link
            href="https://github.com/jlfernandezfernandez"
            className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            Sígueme en GitHub
          </Link>
        </div>
      </section>

      <div className="text-center mt-8">
        <Link
          href="/calculadora-interes-compuesto"
          className="inline-block bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-full transition duration-300 text-sm"
        >
          Prueba la Calculadora de Interés Compuesto
        </Link>
      </div>
    </main>
  );
}
