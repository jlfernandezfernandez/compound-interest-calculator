import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Cómo funciona el interés compuesto?",
      answer:
        "El interés compuesto es el interés que se genera sobre el capital inicial más los intereses acumulados de períodos anteriores. A diferencia del interés simple, aquí los intereses también generan intereses, creando un efecto multiplicador en tus inversiones.",
    },
    {
      question: "¿Cuál es la fórmula del interés compuesto?",
      answer:
        "La fórmula del interés compuesto es: Monto Final = Capital Inicial × (1 + Tasa de Interés)^Tiempo. Por ejemplo, si inviertes 1000€ al 5% anual durante 10 años, el cálculo sería: 1000 × (1 + 0.05)^10.",
    },
    {
      question: "¿Qué es mejor, el interés simple o el compuesto?",
      answer:
        "El interés compuesto es generalmente más beneficioso para el inversor que el interés simple, ya que permite que tu dinero crezca exponencialmente al generar intereses sobre los intereses anteriores.",
    },
    {
      question: "¿Cada cuánto se calcula el interés compuesto?",
      answer:
        "La frecuencia de capitalización puede ser diaria, mensual, trimestral o anual, dependiendo del producto financiero. Cuanto más frecuente sea la capitalización, mayor será el rendimiento final.",
    },
    {
      question:
        "¿Por qué es importante el interés compuesto para mis inversiones?",
      answer:
        "El interés compuesto es fundamental para el crecimiento a largo plazo de tus inversiones porque multiplica tus ganancias de forma exponencial. Einstein lo llamó 'la octava maravilla del mundo' por su capacidad de generar riqueza.",
    },
    {
      question: "¿Cómo puedo maximizar el efecto del interés compuesto?",
      answer:
        "Para maximizar el interés compuesto, es importante: 1) Empezar a invertir lo antes posible, 2) Reinvertir todos los beneficios, 3) Mantener las inversiones a largo plazo, y 4) Buscar las mejores tasas de interés disponibles.",
    },
  ];

  return (
    <section className="my-12 mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Preguntas Frecuentes sobre el Interés Compuesto
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
