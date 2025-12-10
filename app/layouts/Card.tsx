const Card = ({ children, title, link }: any) => {
    //Funcion que advierte al usuario que será redirigido
    const handdleClick = () => {
        let message = `Seras redirigido a la pagina de ${ title }`;

        alert(message);

        alert(`Redirigiendo a ${link}`);
    };
    
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="text-2xl font-bold text-center text-gray-500">
                    { title }
                </h3>
            </div>
            <div className="card-content">
                { children }
            </div>
            <div className="card-footer">
                <button className="text-base bg-blue-800 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700" onClick={handdleClick}>
                    Ver más
                </button>
            </div>
        </div>
    );
};

export default Card;
