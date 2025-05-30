import Header from './Header'
import Inicio from './Inicio'
import Gnocchi from './Gnocchi'
import Molhos from './Molhos'
import Pastas from './Pastas'
import Bebidas from './Bebidas'
import Footer from './Footer'

function Cardapio() {
  return (
    <div>
      <Header></Header>
      <Inicio></Inicio>
      <Gnocchi></Gnocchi>
      <Molhos></Molhos>
      <Pastas></Pastas>
      <Bebidas></Bebidas>
      <Footer></Footer>
    </div>
  )
}

export default Cardapio