// components/Header.tsx
import Link from "next/link";
import { LineChart } from "lucide-react";

export default function Header() {
  return (
    <header
      className="mb-8 py-4 px-4 border-b border-gray-200"
      role="banner"
      aria-label="Cabecera del sitio"
    >
      <Link href="/" className="flex items-center font-semibold space-x-2">
        <LineChart className="w-5 h-5" aria-hidden="true" />
        <span className="text-sm sm:text-lg">Gana con Interés</span>
      </Link>
    </header>
  );
}
