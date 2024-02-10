export default function ProductButtons() {
    return (
        <section className="mb-10 flex justify-center gap-4">
            <button className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full transition duration-300">+ Añadir Fondo de Inversión 📈</button>
            <button className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full transition duration-300">+ Añadir Cuenta Remunerada 💰</button>
            <button className="inline-block bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full transition duration-300">+ Añadir Plan de Pensión 🏦</button>
        </section>
    );
}