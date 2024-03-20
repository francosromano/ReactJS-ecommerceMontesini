import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

// eslint-disable-next-line react/prop-types
const ItemDetail = ({ nombre, precio, categoria, img, stock, descripcion, acciones }) => {

    return (
        <div className="cardDetalle">

            <div className="divImgDetalle">
                <img className="estiloImgDetalle" src={img} alt={nombre} />
            </div>
            <div className="divDatosDetalle">
                <div className="divBreadcrums"> {(categoria)} / {nombre}</div>
                <h2 className='tituloDetalle'>{nombre}</h2>
                <div className="descripDetalle">{descripcion}
                    <p>{acciones}</p>
                    <h3 className='precioDetalle'>$ {precio}</h3>
                    <h3 className='stockDetalle'>Disponible: {stock} unidades</h3>
                </div>
                <div className='ItemCountCSS'><ItemCount /></div>
            </div>
        </div>
    )
}

export default ItemDetail