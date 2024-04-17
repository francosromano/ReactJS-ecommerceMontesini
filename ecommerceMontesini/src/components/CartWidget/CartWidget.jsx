/*eslint-disable react/prop-types*/
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

const {cantidadEnCarrito} = useContext(CartContext)

return (
    <>
        <div>
        <Link to='/cart' className='linkCarrito'>
            <div className='estiloCarrito'>
                <p>🛒<span style={{color:"white"}}>{cantidadEnCarrito()}</span></p>
            </div>
        </Link>
        </div>
    </>
)
}
export default CartWidget