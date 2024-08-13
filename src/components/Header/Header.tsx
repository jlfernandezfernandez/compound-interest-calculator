// components/Header/Header.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Calculator, TrendingUp } from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { ActionButtons } from "./ActionButtons";

const NAV_ITEMS = [
  {
    href: "/calculadora-interes-compuesto",
    label: "Calculadora",
    Icon: Calculator,
  },
  {
    href: "/mejora-tus-resultados",
    label: "Mejora tus resultados",
    Icon: TrendingUp,
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative mb-8" role="banner">
      <div className="py-4 px-4 flex items-center justify-between border-b border-gray-200">
        <Logo />
        <ActionButtons isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      <nav
        id="mobile-menu"
        ref={menuRef}
        className={`absolute top-full left-0 right-0 bg-white z-50 border-b border-gray-200 py-2 px-4 space-y-2 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        role="navigation"
        aria-label="Menú principal"
      >
        {NAV_ITEMS.map(({ href, label, Icon }) => (
          <NavItem
            key={href}
            href={href}
            label={label}
            Icon={Icon}
            isActive={pathname === href}
            onClick={() => setIsMenuOpen(false)}
          />
        ))}
      </nav>
    </header>
  );
}
