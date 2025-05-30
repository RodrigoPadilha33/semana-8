
import './Molhos.css';

const molhosLista = [
    "Alla Puttanesca",
    "Al Pesto di Basilico",
    "Cacio e Pepe",
    "Alla Matriciana",
    
];

const Molhos = ()  => {
    return (
        <div className="molhos-container">
            <h4>Molhos Disponíveis:</h4>
            <ul>
                {molhosLista.map((molho, index) => (
                    <li key={index}>{molho}</li>
                ))}
            </ul>
        </div>
    );
};



export default Molhos;
