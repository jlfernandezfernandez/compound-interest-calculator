import React from "react";
import BuyMeACoffeeButton from "./BuyMeACoffeButton";
import { Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
      <p className="mb-6 max-w-4xl mx-auto">
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
      <div className="flex justify-center mt-6">
        <Link
          href="https://www.producthunt.com/posts/compound-interest-calculator-c9828068-fee6-49d7-a195-ba4941234d3f?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-compound&#0045;interest&#0045;calculator&#0045;c9828068&#0045;fee6&#0045;49d7&#0045;a195&#0045;ba4941234d3f"
          prefetch={false}
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=480491&theme=light"
            alt="Compound&#0032;Interest&#0032;Calculator - The&#0032;Most&#0032;Beautiful&#0032;&#0038;&#0032;Comprehensive&#0032;Calculator | Product Hunt"
            width="250"
            height="54"
          />
        </Link>
      </div>
    </section>
  );
};

export default SupportProjectSection;
