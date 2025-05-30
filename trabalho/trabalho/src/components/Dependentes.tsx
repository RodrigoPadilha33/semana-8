interface dependentes{
    nomes: string;
    idades: number;
    
}

function Dependentes({nomes,idades }:dependentes){
    return ( 
    <p>
        nomes: {nomes};<br/>
        idades: {idades};<br/>
        
    </p>
    )
}

export default Dependentes;