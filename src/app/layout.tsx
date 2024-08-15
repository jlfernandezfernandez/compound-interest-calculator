// app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/store/Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header/Header";

const plusJakartaSNS = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calculadora de Interés Compuesto",
  description:
    "Calcula y visualiza el crecimiento de tus inversiones con interés compuesto.",
  manifest: "/manifest.json",
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
          </div>
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
