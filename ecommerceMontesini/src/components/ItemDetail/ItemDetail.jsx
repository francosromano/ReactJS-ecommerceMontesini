import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const ItemDetail = (item) => {
  const { nombre, precio, categoria, img, stock, descripcion, acciones } = item
  const { agregarAlCarrito } = useContext(CartContext)
  const [cantidad, setCantidad] = useState(0)

  const handleRestar = () => {
    cantidad >= 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1)
  }

  return (
    <>
      <div className="cardDetalle">

          <div className="divImgDetalle">
               <img className="estiloImgDetalle" src={img} alt={nombre} />
          </div>

          <div className="divDatosDetalle">

             <div className="divBreadcrums">
                 <Link to={`/${categoria}`} className="breadcrumsCat">{categoria}</Link> / {nombre}
             </div>

              <h2 className='tituloDetalle'>{nombre}</h2>

              <div className="descripDetalle">
                      {descripcion}
                   <p>{acciones}</p>
                   <h3 className='precioDetalle'>$ {precio}</h3>
                   <h3 className="stockDetalle" style={{ color: stock === 0 ? '' : stock === 1 ? 'red' : stock <= 2 ? 'orange' : 'green' }}>
                       {stock === 1 ? 'Última unidad' : stock === 0 ? 'Sin stock' : stock <= 2 ? '¡Pocas unidades!' : 'Disponible'}: {stock} unidades </h3>
              </div>

              <ItemCount
                         stock={stock}
                         nombre={nombre}
                         cantidad={cantidad}
                         handleSumar={handleSumar}
                         handleRestar={handleRestar}
                         handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
               />

          </div>
      </div>
    </>
  )
}

export default ItemDetail
