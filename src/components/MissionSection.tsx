// components/MissionSection.tsx
import React from "react";

const MissionSection: React.FC = () => {
  return (
    <section className="mb-14" aria-labelledby="mission-heading">
      <h2
        id="mission-heading"
        className="text-xl sm:text-2xl font-bold mb-6 text-center"
      >
        Nuestra Misión 🎯
      </h2>
      <p className="text-lg text-center max-w-4xl mx-auto">
        Simplificar tus cálculos financieros ofreciéndote una herramienta visual
        e intuitiva para proyectar tus ganancias a largo plazo. Te ayudamos a
        entender el impacto del interés compuesto en tus inversiones de manera
        clara y sencilla.
      </p>
    </section>
  );
};

export default MissionSection;
