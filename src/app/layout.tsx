import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Financial Liberty | La calculadora de interés compuesto más avanzada",
  description: "Calcula el interés compuesto de todos tus productos de inversión de forma sencillla. Desde fondos de inversión, fondos indexados, planes de pensión hasta cuentas de ahorros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
