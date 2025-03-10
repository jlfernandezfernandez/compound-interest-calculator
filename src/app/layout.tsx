// app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/store/Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const plusJakartaSNS = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
      <body className={plusJakartaSNS.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="max-w-9xl mx-auto flex-grow px-4 sm:px-6 lg:px-8 mb-8">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
