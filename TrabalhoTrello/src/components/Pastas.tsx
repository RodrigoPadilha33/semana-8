
import './pasta.css'

const pastas = [
  {
    nome: 'Espaguete',
    imagem: "/src/Img/espaguete.jpg",
    preco: 'R$ 25,00',
    molhos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe', 'Alla Matriciana']
  },
  {
    nome: 'Tagliatelle',
    imagem:"/src/Img/tagliatelle.jpg",
    preco: 'R$ 30,00',
    molhos: ['Alla Puttanesca', 'Alla Matriciana']
  },
  {
    nome: 'Fettuccine',
    imagem:"/src/Img/fettuccine.jpg",
    preco: 'R$ 22,50',
    molhos: ['Alla Puttanesca', 'Al Pesto di Basilico', 'Cacio e Pepe']
  },
  {
    nome: 'Penne',
    imagem:"/src/Img/penne.jpg",
    preco: 'R$ 23,00',
    molhos: ['Alla Puttanesca', 'Cacio e Pepe']
  },
  {
    nome: 'Rigatoni',
    imagem:"/src/Img/rigatoni.jpg",
    preco: 'R$ 35,00',
    molhos: ['Alla Matriciana']
  },
  {
    nome: 'Pappardelle',
    imagem:"/src/Img/pappardelle.jpg",
    preco: 'R$ 32,00',
    molhos: ['Alla Puttanesca', 'Alla Matriciana']
  }
];

function Pastas() {
  return (
    <section id='pastas'>
        
      <div id='titulos'>
        <h2>Cardápio de Pastas</h2>
      </div>

      <div className='card-Pastas'>
        {pastas.map((pasta, index) => (
          <div key={index}>
            <h3>{pasta.nome}</h3>
            <img src={pasta.imagem} alt={pasta.nome} />
            <p>Valor: {pasta.preco}</p>
            <h3>Molhos:</h3>
            <ul>
            {pasta.molhos.map((molho, i) => (
              <li key={i}>{molho}</li>
            ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pastas;