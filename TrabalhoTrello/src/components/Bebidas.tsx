import './bebida.css'

const bebidas = [
  {
    categoria: "Água",
    itens: [
      { nome: "Água Mineral", preco: "R$ 4,00" }
    ]
  },
  {
    categoria: "Refrigerante",
    itens: [
      { nome: "Coca-Cola", preco: "R$ 6,00" },
      { nome: "Guaraná", preco: "R$ 5,50" },
      { nome: "Sprite", preco: "R$ 5,50" }
    ]
  },
  {
    categoria: "Sucos",
    itens: [
      { nome: "Morango", preco: "R$ 7,00" },
      { nome: "Laranja", preco: "R$ 6,50" },
      { nome: "Uva", preco: "R$ 7,00" }
    ]
  }
];

function Bebidas() {
  return (
    <section id='bebidas'>
      
      <div id='titulos'>
        <h2>Cardápio de Bebidas</h2>
      </div>

      {bebidas.map((bebida, index) => (
        <div key={index} className="categoria">
          <h2>{bebida.categoria}</h2>
          <ul>
            {bebida.itens.map((item, i) => (
              <li key={i}>
                <strong>{item.nome}</strong> - {item.preco}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Bebidas;