// app/about/page.tsx
import React from "react";
import { Metadata } from "next";
import AboutIntroSection from "@/components/AboutIntroSection";
import MissionSection from "@/components/MissionSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import SupportProjectSection from "@/components/SupportProjectSection";

export const metadata: Metadata = {
  title: "Sobre Gana con Interés: Calculadora de Interés Compuesto",
  description:
    "Descubre cómo Gana con Interés te ayuda a calcular y visualizar fácilmente el crecimiento de tus inversiones con nuestra calculadora de interés compuesto gratuita y sencilla.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutIntroSection />
      <MissionSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <SupportProjectSection />
    </main>
  );
}
