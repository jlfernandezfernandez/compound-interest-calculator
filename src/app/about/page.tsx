import Link from "next/link";
import { Metadata } from "next";
import {
  Github,
  Calculator,
  Target,
  Star,
  Lock,
  Wifi,
  Globe,
  Download,
} from "lucide-react";
import BuyMeACoffeeButton from "@/components/BuyMeACoffeButton";

export const metadata: Metadata = {
  title: "Sobre Gana con Interés: Calculadora Simple de Interés Compuesto",
  description:
    "Descubre cómo Gana con Interés te ayuda a calcular y visualizar fácilmente el crecimiento de tus inversiones con nuestra calculadora de interés compuesto gratuita y sencilla.",
};

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-3 mb-4">
    {icon}
    <div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <main>
      <section className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Gana con Interés: Tu Compañero de Inversiones 📈
        </h1>
        <p className="text-xl text-gray-700 mb-6 max-w-4xl mx-auto">
          Calcula y visualiza el poder del interés compuesto en tus inversiones
          de forma gratuita y sencilla. Ideal para fondos de inversión, cuentas
          remuneradas y planes de pensiones.
        </p>
        <Link
          href="/calculadora-interes-compuesto"
          className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full transition duration-300 text-lg font-semibold"
        >
          Empieza a Calcular Tus Ganancias
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Nuestra Misión 🎯
        </h2>
        <p className="text-lg text-center max-w-4xl mx-auto">
          Simplificar tus cálculos financieros ofreciéndote una herramienta
          visual e intuitiva para proyectar tus ganancias a largo plazo. Te
          ayudamos a entender el impacto del interés compuesto en tus
          inversiones de manera clara y sencilla.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Características Principales 🚀
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Feature
            icon={<Calculator className="w-6 h-6 text-blue-500" />}
            title="Cálculos Instantáneos"
            description="Obtén resultados de interés compuesto al instante con nuestra interfaz intuitiva."
          />
          <Feature
            icon={<Star className="w-6 h-6 text-yellow-500" />}
            title="Visualización Clara"
            description="Gráficos intuitivos que muestran el crecimiento de tu inversión a lo largo del tiempo."
          />
          <Feature
            icon={<Target className="w-6 h-6 text-green-500" />}
            title="Comparación de Inversiones"
            description="Compara visualmente diferentes tipos de inversiones para tomar decisiones informadas."
          />
          <Feature
            icon={<Lock className="w-6 h-6 text-purple-500" />}
            title="Almacenamiento Local"
            description="Tus cálculos se guardan automáticamente en tu navegador para futuras consultas."
          />
          <Feature
            icon={<Wifi className="w-6 h-6 text-red-500" />}
            title="Modo Offline"
            description="Utiliza la aplicación sin necesidad de conexión a internet (No se requiere Wi-Fi ni datos móviles)."
          />
          <Feature
            icon={<Globe className="w-6 h-6 text-indigo-500" />}
            title="Multiplataforma"
            description="Disponible como aplicación para iOS, Android y escritorio."
          />
          <Feature
            icon={<Download className="w-6 h-6 text-teal-500" />}
            title="Descargable"
            description="Instala la aplicación en tu dispositivo para un acceso rápido y fácil."
          />
        </div>
      </section>

      <section className="mb-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl sm:text-xl font-bold mb-6 text-center">
          ¿Por Qué Elegir Gana con Interés? 🤔
        </h2>
        <ul className="space-y-3 max-w-4xl mx-auto">
          <li className="flex items-center">
            <span className="mr-2">✅</span> <strong>Simplicidad:</strong> Fácil
            de usar, sin complicaciones.
          </li>
          <li className="flex items-center">
            <span className="mr-2">✅</span>{" "}
            <strong>Gratuita y Sin Publicidad: </strong> Sin costes ocultos ni
            distracciones.
          </li>
          <li className="flex items-center">
            <span className="mr-2">✅</span> <strong>Versatilidad:</strong> Útil
            para diferentes tipos de inversiones y perfiles de ahorradores.
          </li>
          <li className="flex items-center">
            <span className="mr-2">✅</span> <strong>Educativa:</strong>{" "}
            Comprende mejor el impacto del interés compuesto.
          </li>
          <li className="flex items-center">
            <span className="mr-2">✅</span>{" "}
            <strong>Persistencia de Datos:</strong> Retoma tus análisis en
            cualquier momento.
          </li>
        </ul>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">
          Apoya Este Proyecto ❤️
        </h2>
        <p className="mb-6 max-w-4xl mx-auto">
          Si encuentras útil Gana con Interés, considera apoyar su desarrollo y
          mantenimiento. Tu contribución ayuda a mantener esta herramienta
          gratuita y en constante mejora.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <BuyMeACoffeeButton />
          <Link
            href="https://github.com/jlfernandezfernandez"
            className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            Sígueme en GitHub
          </Link>
        </div>
        <div className="flex justify-center mt-6">
          <a
            href="https://www.producthunt.com/posts/compound-interest-calculator-c9828068-fee6-49d7-a195-ba4941234d3f?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-compound&#0045;interest&#0045;calculator&#0045;c9828068&#0045;fee6&#0045;49d7&#0045;a195&#0045;ba4941234d3f"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=480491&theme=light"
              alt="Compound&#0032;Interest&#0032;Calculator - The&#0032;Most&#0032;Beautiful&#0032;&#0038;&#0032;Comprehensive&#0032;Calculator | Product Hunt"
              width="250"
              height="54"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
