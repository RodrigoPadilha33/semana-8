interface conjugeProps{
    nome: string;
    idade: number;
    nascimento: number;
}

function Conjuge({nome, nascimento, idade }:conjugeProps){
    return ( 
    <p>
        nome: {nome};<br/>
        idade: {idade};<br/>
        nascimento: {nascimento};<br/>
    </p>
    )
}

export default Conjuge;