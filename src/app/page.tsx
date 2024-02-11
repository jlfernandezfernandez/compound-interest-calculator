import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-radial font-body">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Maximiza tu Libertad Financiera
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Calcula aquí cuanto dinero tendrás en un futuro gracias al poder del interés compuesto.
        </p>
        <Link href="/calculadora" className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full transition duration-300">
            Adelante
        </Link>
      </div>
    </main>
  );
}
