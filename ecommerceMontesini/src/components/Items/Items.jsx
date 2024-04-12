/* eslint-disable react/prop-types */

import ItemCount from "../ItemCount/ItemCount"
import './Items.css'
import { Link } from "react-router-dom"


const Item = (producto) => {
    const { nombre, precio, img, stock } = producto
    const nombreURL = encodeURIComponent(nombre);
     
    return (
        <>
            <div className="contenedorCard">
                <img className="estiloImg" src={img} alt={nombre} />
                <Link to={`/detalle/${nombreURL}`}><button className="btnGeneral">Ver detalles</button></Link>
                <h3 className="nombreItem"> {nombre}</h3>
                <h5 className="stockItem">Disponible: {stock} unidades</h5>
                <p className="precioItem">${precio}</p>
                <ItemCount className='btnGeneral' stock={stock} nombre={nombre}/>
            </div>
        </>
    )
}

export default Item
