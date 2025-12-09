import headerImage from '../images/header-image.png';

export function Welcome() {
	return (
		<>
			{/** Navbar (Menú de navegación) */}
			<div className="navbar">
				<div className="navbar-container">
					<span className="navbar-item">
						<a className="navbar-link" href="/">
							Inicio
						</a>
					</span>
					<span className="navbar-item">
						<a className="navbar-link" href="/">
							Servicios
						</a>
					</span>
					<span className="navbar-item">
						<a className="navbar-link" href="/">
							Contacto
						</a>
					</span>
					<span className="navbar-item">
						<a className="navbar-link" href="/">
							Nosotros
						</a>
					</span>
				</div>
			</div>

			{/* Header (Encabezado) */}
			<header className="header">
				<div className="header-container">
					<div className="w-2/5">
						<img
							src={headerImage}
							className="w-2/3 object-center"
							alt=""
						/>
					</div>
					<div className="w-3/5">
						<h1 className="header-title text-5xl font-bold mb-5">
							Tu mejor elección a la hora de comprar
						</h1>
						<p className="text-base text-justify">
							lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</div>
			</header>
		</>
	);
}


