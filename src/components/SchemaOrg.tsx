import React from "react";
import Script from "next/script";

interface SchemaOrgProps {
  url: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({
  url,
  title,
  description,
  imageUrl,
}) => {
  // Datos estructurados para la organización
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gana con Interés",
    url: "https://jlfernandezfernandez.github.io/compound-interest-calculator",
    sameAs: ["https://github.com/jlfernandezfernandez"],
  };

  // Datos estructurados para la página web
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    name: title,
    description,
    ...(imageUrl && { image: imageUrl }),
    isPartOf: {
      "@type": "WebSite",
      name: "Gana con Interés",
      url: "https://jlfernandezfernandez.github.io/compound-interest-calculator",
    },
    inLanguage: "es-ES",
  };

  // Datos estructurados para la calculadora
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calculadora de Interés Compuesto",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
  };

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <Script
        id="schema-calculator"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
    </>
  );
};

export default SchemaOrg;
