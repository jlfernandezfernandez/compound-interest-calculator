// components/Button.tsx
import React, {
  forwardRef,
  ElementType,
  ComponentPropsWithoutRef,
  ReactElement,
} from "react";
import { cn } from "@/lib/utils";

const variantStyles = {
  primary: "bg-black hover:bg-gray-800 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  outline: "bg-transparent border border-black hover:bg-gray-100 text-black",
};

const sizeStyles = {
  sm: "py-2 px-4 text-sm",
  md: "py-3 px-6 text-base",
  lg: "py-4 px-8 text-lg",
};

type ButtonProps<C extends ElementType> = {
  as?: C;
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
} & ComponentPropsWithoutRef<C>;

type ButtonComponent = (<C extends ElementType = "button">(
  props: ButtonProps<C>
) => ReactElement) & { displayName?: string };

const Button: ButtonComponent = forwardRef(
  <C extends ElementType = "button">(
    {
      as,
      children,
      className,
      variant = "primary",
      size = "md",
      ...props
    }: ButtonProps<C>,
    ref?: React.Ref<any>
  ) => {
    const Component = as || "button";
    return (
      <Component
        ref={ref}
        className={cn(
          "font-semibold rounded-full transition duration-300",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
) as ButtonComponent;

Button.displayName = "Button";

export default Button;
