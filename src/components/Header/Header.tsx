// components/Header/Header.tsx
import { Logo } from "./Logo";

export default function Header() {
  return (
    <header
      className="mb-8 py-4 px-4 border-b border-gray-200"
      role="banner"
      aria-label="Cabecera del sitio"
    >
      <Logo />
    </header>
  );
}
