import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Calculadora de Interés Compuesto | Simulador Gratuito",
  alternates: {
    canonical:
      "https://jlfernandezfernandez.github.io/compound-interest-calculator/calculadora-interes-compuesto",
  },
};

export default function HomePage() {
  redirect("/calculadora-interes-compuesto");
}
