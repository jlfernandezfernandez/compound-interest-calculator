// components/Header/ActionButtons.tsx
import Link from "next/link";
import { HelpCircle, Menu, X } from "lucide-react";

interface ActionButtonsProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  isMenuOpen,
  toggleMenu,
}) => (
  <div className="flex items-center space-x-4">
    <Link
      href="/about"
      className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
      aria-label="Acerca de Gana Con Interés"
    >
      <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    </Link>
    <button
      onClick={toggleMenu}
      className="p-2 rounded-md focus:outline-none hover:bg-gray-100 transition-colors duration-200"
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
      aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
    >
      {isMenuOpen ? (
        <X className="w-6 h-6" aria-hidden="true" />
      ) : (
        <Menu className="w-6 h-6" aria-hidden="true" />
      )}
    </button>
  </div>
);
