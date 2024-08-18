import React from "react";
import { Calculator, Target, Lock, Wifi, Globe, Download } from "lucide-react";

const FeatureItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md">
    <div className="flex-shrink-0">
      <Icon className="w-8 h-8 text-blue-500" />
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ImprovedFeaturesSection = () => {
  const features = [
    {
      icon: Calculator,
      title: "Cálculos Instantáneos",
      description:
        "Obtén resultados de interés compuesto al instante con nuestra interfaz intuitiva.",
    },
    {
      icon: Target,
      title: "Visualización Clara",
      description:
        "Gráficos intuitivos que muestran el crecimiento de tu inversión a lo largo del tiempo.",
    },
    {
      icon: Lock,
      title: "Almacenamiento Local",
      description:
        "Tus cálculos se guardan automáticamente en tu navegador para futuras consultas.",
    },
    {
      icon: Wifi,
      title: "Modo Offline",
      description:
        "Utiliza la aplicación sin necesidad de conexión a internet.",
    },
    {
      icon: Globe,
      title: "Multiplataforma",
      description: "Disponible como aplicación para iOS, Android y escritorio.",
    },
    {
      icon: Download,
      title: "Descargable",
      description:
        "Instala la aplicación en tu dispositivo para un acceso rápido y fácil.",
    },
  ];

  return (
    <section className="mb-14">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
          Características Principales 🚀
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImprovedFeaturesSection;
