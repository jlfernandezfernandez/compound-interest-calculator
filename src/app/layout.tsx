import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Importar Plus Jakarta SNS desde Google Fonts
import "./globals.css";
import { Providers } from "@/store/Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

const plusJakartaSNS = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculadora de Interés Compuesto 2024: Optimiza Inversiones | Herramienta Gratuita",
  description: "Descubre cómo el interés compuesto puede transformar tus ahorros e inversiones en 2024. Utiliza nuestra calculadora gratuita para planificar y optimizar tus estrategias financieras. Adecuada para todo tipo de inversores, desde principiantes hasta avanzados.",
};

export const viewport: Viewport = {
  themeColor: 'black',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={plusJakartaSNS.className}>
        <Providers>
          {children}
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
