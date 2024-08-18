// components/WhyChooseUsSection.tsx
import React from "react";

const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    { text: "Simplicidad: Fácil de usar, sin complicaciones." },
    { text: "Gratuita y Sin Publicidad: Sin costes ocultos ni distracciones." },
    {
      text: "Versatilidad: Útil para diferentes tipos de inversiones y perfiles de ahorradores.",
    },
    { text: "Educativa: Comprende mejor el impacto del interés compuesto." },
    {
      text: "Persistencia de Datos: Retoma tus análisis en cualquier momento.",
    },
  ];

  return (
    <section
      className="mb-14 bg-gray-100 p-6 rounded-lg"
      aria-labelledby="why-choose-heading"
    >
      <h2
        id="why-choose-heading"
        className="text-xl sm:text-2xl font-bold mb-6 text-center"
      >
        ¿Por Qué Elegir Gana con Interés? 🤔
      </h2>
      <ul className="space-y-3 max-w-4xl mx-auto">
        {reasons.map((reason, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">✅</span>
            <span dangerouslySetInnerHTML={{ __html: reason.text }} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUsSection;
