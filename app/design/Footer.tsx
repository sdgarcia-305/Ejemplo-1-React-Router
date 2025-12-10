const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-10 mt-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Columna 1 */}
                <div>
                    <h2 className="text-xl font-bold">Innovatech</h2>
                    <p className="mt-3 text-sm text-gray-300">
                        Impulsando la innovación tecnológica con soluciones modernas.
                    </p>
                </div>

                {/* Columna 2 */}
                <div>
                    <h3 className="text-lg font-semibold">Enlaces</h3>
                    <ul className="mt-3 space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">Inicio</a></li>
                        <li><a href="#services" className="hover:underline">Servicios</a></li>
                        <li><a href="#contact" className="hover:underline">Contacto</a></li>
                    </ul>
                </div>

                {/* Columna 3 */}
                <div>
                    <h3 className="text-lg font-semibold">Contacto</h3>
                    <ul className="mt-3 space-y-2 text-sm text-gray-300">
                        <li>Email: contacto@innovatech.com</li>
                        <li>Tel: +503 0000 0000</li>
                        <li>San Salvador, El Salvador</li>
                    </ul>
                </div>
            </div>

            {/* Parte inferior */}
            <div className="text-center border-t border-blue-700 mt-10 pt-4 text-sm text-gray-300">
                © {new Date().getFullYear()} Innovatech — Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
