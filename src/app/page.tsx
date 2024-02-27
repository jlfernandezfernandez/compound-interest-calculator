import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 font-body">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Descubre Cómo Maximizar tu Libertad Financiera
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explora el impacto del interés compuesto en tu futuro financiero con nuestra herramienta líder en el mercado.
        </p>
        <p className="text-lg md:text-xl mb-8">
          Nuestra calculadora avanzada de interés compuesto te permite visualizar el crecimiento de tu inversión a lo largo del tiempo, ayudándote a tomar decisiones informadas para alcanzar tus objetivos financieros más rápidamente.
        </p>
        <Link href="/calculadora-interes-compuesto">
            <a className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full transition duration-300">
                Empezar Ahora
            </a>
        </Link>
      </div>
    </main>
  );
}
