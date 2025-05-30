interface userProps{
    nome: string;
    idade: number;
    nascimento: number;
}

function DadosUser ({nome, nascimento, idade }:userProps){
    return ( 
    <p>
        nome: {nome};<br/>
        idade: {idade};<br/>
        nascimento: {nascimento};<br/>
    </p>)
}

export default DadosUser;