import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Importar Plus Jakarta SNS desde Google Fonts
import "./globals.css";
import { Providers } from "@/store/Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import Footer from "@/components/Footer";
import BuyMeACoffeeButton from "@/components/BuyMeACoffeButton";

const plusJakartaSNS = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Financial Liberty | La calculadora de interés compuesto más avanzada",
  description: "Calcula el interés compuesto de todos tus productos de inversión de forma sencillla. Desde fondos de inversión, fondos indexados, planes de pensión hasta cuentas de ahorros.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSNS.className}>
        <Providers>
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
