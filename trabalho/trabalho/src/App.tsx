
import './App.css'
import DadosUser from './components/DadosUser';
import Conjuge from './components/conjuge';
import Dependentes from './components/Dependentes';
function App() {


  return (
    <>
    <div>
    <DadosUser nome= "Rodrigo"  idade={34} nascimento={1991}/>
    </div>

    <div>
    <Conjuge nome= "Andreia" idade={30} nascimento={1994}/>
    </div>

    <div>
    <Dependentes nomes= "Nenhum" idades={0}/>
    </div>

    </>
  )
}

export default App
