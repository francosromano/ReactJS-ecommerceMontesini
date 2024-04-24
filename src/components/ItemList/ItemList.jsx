/* eslint-disable react/prop-types */
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ productos }) => {

  return (
    <>
      <div className='contenedorItems'>
        {productos.map(item => <Item key={item.nombre}{...item} />)}
      </div>
    </>
  )
}
  export default ItemList