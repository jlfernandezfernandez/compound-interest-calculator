import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maximiza tus Ganancias: Aprovecha el Interés Compuesto",
  description:
    "Eleva tu estrategia de inversión y maximiza tus rendimientos con el poder del interés compuesto. Descubre cómo MyInvestor, Micappital y Revolut pueden transformar tus finanzas.",
};

export default function ImproveResultsPage() {
  return (
    <main className="px-4 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        Maximiza tus Inversiones con el Interés Compuesto 💼
      </h1>
      <p className="text-base sm:text-lg text-gray-700 mb-6">
        En el camino hacia la libertad financiera, cada decisión cuenta.
        Descubre cómo el <strong>interés compuesto</strong> y las{" "}
        <strong>herramientas adecuadas</strong> pueden ser tus mejores aliados.
        🚀
      </p>

      <div className="p-4 mb-8 bg-white border-l-4 border-black rounded-lg shadow-sm">
        <p className="text-base sm:text-lg text-gray-600 mb-3">
          ¿Quieres ver con más detalle los productos que tengo e intereses? 🔍
        </p>
        <Link
          href="/mejora-tus-resultados/como-invierto"
          className="inline-block bg-black hover:bg-gray-800 text-white text-sm py-2 px-4 rounded-full transition duration-300"
        >
          Descúbrelos
        </Link>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">MyInvestor 🏦</h2>
          <p className="mb-3 text-base">
            Con una selección de fondos de inversión de bajo coste y alta
            rentabilidad, MyInvestor se posiciona como una plataforma esencial
            para diversificar tu cartera. Ideal para inversores que buscan
            opciones variadas.
          </p>
          <p className="mb-3 text-base">
            Gracias a la <strong>diversidad de productos financieros</strong>, a
            lo bien que funcionan sus planes de pensión y a las{" "}
            <strong>bajas comisiones</strong>, es el banco{" "}
            <strong>
              donde tengo mi cartera de inversión y mi plan de pensiones
            </strong>
            .
          </p>
          <div className="p-4 bg-gray-50 rounded-lg mb-3">
            <p className="font-semibold mb-2">✨ Bono de bienvenida</p>
            <p>
              Obtén 20€ al abrir una cuenta y cumplir una de las siguientes
              condiciones:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>
                100€ invertidos en fondos, carteras indexadas (roboadvisor),
                acciones o planes de pensión.
              </li>
              <li>1.000€ en la cuenta.</li>
              <li>Un depósito contratado.</li>
            </ul>
          </div>
          <a
            href="https://myinvestor.page.link/decXeBGbKbyMkiJEA"
            className="text-blue-500 hover:underline"
          >
            Únete a MyInvestor
          </a>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Micappital 💼</h2>
          <p className="mb-3 text-base">
            Optimiza tus inversiones con Micappital, una startup que ofrece
            gestión financiera personalizada, alineando tus inversiones con tus
            metas financieras, gracias a su equipo de expertos.
          </p>
          <p className="mb-3 text-base">
            <strong>
              Ellos buscan los mejores fondos de inversión para ti
            </strong>{" "}
            en base a tu perfil, ayudándote a crear una{" "}
            <strong>cartera diversificada y balanceada</strong>. Personalmente,
            estoy muy contento y gracias a ellos estoy consiguiendo un 10% de
            rentabilidad anual.
          </p>
          <div className="p-4 bg-gray-50 rounded-lg mb-3">
            <p className="font-semibold mb-2">✨ Para que lo pruebes:</p>
            <p>Recibe 50€ en comisiones al usar este enlace.</p>
            <p className="mt-2">
              Ellos cobran 2,5€/mes por cada 1.000€ que gestionen (Máximo de
              25€/mes),{" "}
              <strong>siempre que ese mes te hayan hecho ganar dinero.</strong>
            </p>
          </div>
          <a
            href="https://www.micappital.com?referal=jordiluisgZ2kOJ"
            className="text-blue-500 hover:underline"
          >
            Descubre Micappital
          </a>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Revolut 💳</h2>
          <p className="mb-3 text-base">
            Revolut transforma la gestión diaria de tu dinero ofreciendo una
            cuenta remunerada con tasas competitivas, incluso en su plan básico.
            Una excelente herramienta para ahorrar e invertir.
          </p>
          <p className="mb-3 text-base">
            Aquí tengo <strong>contratada mi cuenta remunerada</strong>, la cual
            me ofrece una rentabilidad anual del 3.11%, pagada cada día. La{" "}
            <strong>cuenta es gratuita</strong> y es una excelente manera de
            luchar contra la inflación.
          </p>
          <p className="mb-3 text-base">
            Y sí, tienen IBAN español y toda la protección que otorgaría
            cualquier otro banco español.
          </p>
          <a
            href="https://revolut.com/referral/?referral-code=jordilftw5!FEB2-24-VR-ES"
            className="text-blue-500 hover:underline"
          >
            Explora Revolut
          </a>
        </section>
      </div>

      <p className="text-right text-sm text-gray-600 mt-8">
        Utilizando estos enlaces apoyarás el desarrollo de esta web, gracias.
      </p>

      <div className="text-center p-6 mt-8 bg-gray-100 rounded-lg">
        <p className="text-lg text-gray-700 mb-4">
          ¿Quieres ver cómo el interés compuesto ha transformado mis finanzas?
        </p>
        <Link
          href="/mejora-tus-resultados/como-invierto"
          className="inline-block bg-black hover:bg-gray-800 text-white py-2 px-6 rounded transition duration-300"
        >
          Explora Cómo Invierto
        </Link>
      </div>
    </main>
  );
}
