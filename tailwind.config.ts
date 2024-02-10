import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'body': ['Inter', 'Roboto', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#0a0d22', // Asegúrate de ajustar estos valores según tus preferencias
        'light-blue': '#007bff',
      },
    },
  },
  plugins: [],
};
export default config;
