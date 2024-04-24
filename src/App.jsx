import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import logoWhatsapp from './assets/logoWhatsapp.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>

            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/:categoria' element={<ItemListContainer />} />
            <Route exact path='/detalle/:nombre' element={<ItemDetailContainer />} />
            <Route exat path='/cart' element={<Cart />} />
            <Route exat path='/CheckOut' element={<CheckOut />} />
            <Route path='*' element={<h1>Direccion no encontrada</h1>} />

          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>

      <a href="https://api.whatsapp.com/message/PEPW73BR2VMGO1?autoload=1&app_absent=0" target="_blank"><img className="iconoWhatsapp" src={logoWhatsapp} alt="Icono Whatsapp" /></a>
    </>
  )
}

export default App


