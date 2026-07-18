const baseUrl = "https://jlfernandezfernandez.github.io/compound-interest-calculator";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${baseUrl}/calculadora-interes-compuesto`,
    name: "Calculadora de Interés Compuesto | Simulador Gratuito de Inversiones",
    description:
      "Calcula el interés compuesto de tus inversiones. Fondos indexados, planes de pensiones y cuentas remuneradas. Resultados instantáneos y gráficos.",
    isPartOf: {
      "@type": "WebSite",
      name: "Gana con Interés",
      url: baseUrl,
    },
    inLanguage: "es-ES",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calculadora de Interés Compuesto",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  },
];

export default function SchemaOrg() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
