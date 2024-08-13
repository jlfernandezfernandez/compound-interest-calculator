// components/Header/NavItem.tsx
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  Icon: LucideIcon;
  isActive: boolean;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  href,
  label,
  Icon,
  isActive,
  onClick,
}) => (
  <Link
    href={href}
    className={`flex items-center gap-2 p-2 rounded-md transition-colors duration-200 ${
      isActive
        ? "bg-gray-100 text-gray-900"
        : "hover:bg-gray-50 hover:text-gray-700"
    }`}
    onClick={onClick}
  >
    <Icon className="w-5 h-5" aria-hidden="true" />
    <span>{label}</span>
  </Link>
);
