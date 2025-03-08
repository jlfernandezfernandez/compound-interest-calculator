import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Calculadora de Interés Compuesto | Simulador Gratuito 2025",
  description:
    "Calcula el interés compuesto de tus inversiones ✓ Simulador actualizado 2025 ✓ Ejemplos prácticos ✓ Comparador de productos financieros ✓ Resultados instantáneos",
  keywords:
    "calculadora interés compuesto, simulador inversiones, calculadora rendimiento inversiones, interés compuesto calculator, calculadora intereses, rentabilidad inversiones, libertad financiera",
  alternates: {
    canonical: "https://www.ganaconinteres.com",
  },
  openGraph: {
    title: "Calculadora de Interés Compuesto | Simulador Gratuito 2025",
    description:
      "Calcula el interés compuesto de tus inversiones con nuestro simulador gratuito. Resultados instantáneos y gráficos detallados.",
    url: "https://www.ganaconinteres.com",
    siteName: "Gana con Interés",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Interés Compuesto | Simulador Gratuito 2025",
    description:
      "Calcula el interés compuesto de tus inversiones con nuestro simulador gratuito. Resultados instantáneos y gráficos detallados.",
  },
};

export default function HomePage() {
  redirect("/calculadora-interes-compuesto");
}
