import React from "react";
import BuyMeACoffeeButton from "./BuyMeACoffeButton";
import { Github } from "lucide-react";
import Link from "next/link";

const SupportProjectSection: React.FC = () => {
  return (
    <section
      className="mb-14 text-center"
      aria-labelledby="support-project-heading"
    >
      <h2
        id="support-project-heading"
        className="text-xl sm:text-2xl font-bold mb-6"
      >
        Apoya Este Proyecto ❤️
      </h2>
      <p className="mb-6">
        Si encuentras útil Gana con Interés, considera apoyar su desarrollo y
        mantenimiento. Tu contribución ayuda a mantener esta herramienta
        gratuita y en constante mejora.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <BuyMeACoffeeButton />
        <a
          href="https://github.com/jlfernandezfernandez"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                     bg-gray-800 hover:bg-gray-700 text-white
                     transition-colors duration-300 font-semibold text-sm
                     shadow-md hover:shadow-lg"
        >
          <Github className="h-5 w-5" />
          Sígueme en GitHub
        </a>
      </div>
      <div className="mt-6">
        <Link
          href="https://www.buildyoursetup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 border-b border-dashed border-gray-400 hover:border-blue-400 pb-0.5"
        >
          Visita también otro de mis proyectos: buildyoursetup.com
        </Link>
      </div>
    </section>
  );
};

export default SupportProjectSection;
