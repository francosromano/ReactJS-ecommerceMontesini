import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route exact path='/home' element={<ItemListContainer />} />
          <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route exact path='/detalle/:detalle' element={<ItemDetailContainer />} />
          <Route exact path='*' element={<h1>Direccion no encontrada</h1>} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

