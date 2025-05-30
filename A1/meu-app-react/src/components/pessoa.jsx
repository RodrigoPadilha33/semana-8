function Pessoa(props){
    return(
        <div>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
        </div>
    );
}

export default Pessoa;