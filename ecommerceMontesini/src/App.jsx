import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
        <CartProvider>
      <BrowserRouter>
        <NavBar/>

        <Routes>

          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/:categoria' element={<ItemListContainer />} />
          <Route exact path='/detalle/:nombre' element={<ItemDetailContainer />} />
          <Route exat path='/cart' element={<Cart/>}/>
          <Route path='*' element={<h1>Direccion no encontrada</h1>} />

        </Routes>
        
      </BrowserRouter>
        </CartProvider>
    </>
  )
}

export default App


