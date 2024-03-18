import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductosComp from './components/Productos/Productos'
import ProductoComp from './components/Producto/Producto'




function App() {

  return (
    <>
        <NavBar />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ItemListContainer greeting={'Farmacia'} />
        </div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/productos' element={<ProductosComp />} />
          <Route exact path='/producto/:prodId' element={<ProductoComp />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App

