import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Calculadora de Interés Compuesto 2024",
    short_name: "Interés Compuesto",
    description: "Calculadora de interés compuesto para optimizar inversiones",
    start_url: "/",
    orientation: "portrait",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/apple-icon?<generated>",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  };
}
