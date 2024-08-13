// components/Header/Logo.tsx
import Link from "next/link";
import { LineChart } from "lucide-react";

export const Logo = () => (
  <Link href="/" className="flex items-center font-semibold space-x-2">
    <LineChart className="w-5 h-5" aria-hidden="true" />
    <span className="text-sm sm:text-lg">Gana con interés</span>
  </Link>
);
