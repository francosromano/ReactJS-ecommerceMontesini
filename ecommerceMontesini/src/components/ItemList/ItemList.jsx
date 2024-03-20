/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import Item from '../Items/Items'
import './ItemList.css'

const ItemList = ({ productos }) => {
    if (!Array.isArray(productos) || productos.length === 0) {
        return <div>No hay productos disponibles</div>;
    }
    return (
        <>
            <div className='contenedorItems'>
                {productos.map(producto => <Item key={producto.id}{...producto} />)}
            </div>
        </>
    )
}
export default ItemList