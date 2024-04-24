/* eslint-disable react/prop-types */

import './Item.css'
import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const Item = (item) => {
    const { nombre, precio, img, stock } = item

    const { agregarAlCarrito } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }


    return (
        <>
            <div className="contenedorCard" key={nombre}>
                <img className="estiloImg" src={img} alt={nombre} />
                <Link to={`/detalle/${item.id}`}><button className="btnGeneral">Ver detalles</button></Link>
                <h3 className="nombreItem"> {nombre}</h3>
                <h5 className="stockItem" style={{ color: stock === 0 ? 'red' : stock === 1 ? 'red' : stock <= 2 ? 'orange' : 'green' }}>
                    {stock === 1 ? '¡Última unidad!' : stock === 0 ? 'No disponible' : stock <= 2 ? '¡Pocas unidades!' : 'Disponible'}</h5>
                <p className="precioItem">$ {precio}</p>
                <ItemCount
                    stock={stock}
                    nombre={nombre}
                    cantidad={cantidad}
                    handleSumar={handleSumar}
                    handleRestar={handleRestar}
                    handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </>
    )
}

export default Item