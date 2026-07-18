// app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Calculadora de Interés Compuesto | Simulador Gratuito 2025",
    template: "%s | Gana con Interés",
  },
  description:
    "Calcula el interés compuesto de tus inversiones ✓ Simulador actualizado 2025 ✓ Ejemplos prácticos ✓ Comparador de productos financieros ✓ Resultados instantáneos",
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${plusJakarta.className} ${spaceGrotesk.variable}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="w-full max-w-7xl mx-auto flex-grow px-4 sm:px-6 lg:px-8 mb-8">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
