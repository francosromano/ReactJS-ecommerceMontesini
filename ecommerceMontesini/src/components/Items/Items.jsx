import ItemCount from "../ItemCount/ItemCount"
import './Items.css'
import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types, no-unused-vars
const Item = ({id, nombre, precio, img, stock }) => {


    return (
        <>
            <div className="contenedorCard">
                <img className="estiloImg" src={img} alt={nombre} />
                <Link to={`/detalle/${id}`}><button className="btnGeneral">Ver detalles</button></Link>
                <h3 className="nombreItem"> {nombre}</h3>
                <h5 className="stockItem">Disponible: {stock} unidades</h5>
                <p className="precioItem">${precio}</p>
                <ItemCount className='btnGeneral' stock={stock} />
            </div>
        </>
    )
}

export default Item