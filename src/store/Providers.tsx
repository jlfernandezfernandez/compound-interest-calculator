// /store/Providers.tsx

"use client";

import { CalculatorProvider } from "./CalculatorContext";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <CalculatorProvider>
      {children}
    </CalculatorProvider>
  );
};