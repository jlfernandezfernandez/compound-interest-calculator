import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/store/Providers";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
          <Providers>
            {children}
            <SpeedInsights />
            <Analytics />
          </Providers>
        </body>
    </html>
  );
}
