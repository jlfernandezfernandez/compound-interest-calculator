import { MetadataRoute } from "next";

export const dynamic = "force-static";

const basePath = "/compound-interest-calculator";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Calculadora de Interés Compuesto",
    short_name: "Interés Compuesto",
    description: "Calculadora de interés compuesto para optimizar inversiones",
    theme_color: "#000000",
    background_color: "#000000",
    display: "standalone",
    scope: basePath + "/",
    start_url: basePath + "/",
    icons: [
      {
        src: `${basePath}/favicon.ico`,
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: `${basePath}/icon`,
        type: "image/png",
        sizes: "192x192",
      },
    ],
  };
}
