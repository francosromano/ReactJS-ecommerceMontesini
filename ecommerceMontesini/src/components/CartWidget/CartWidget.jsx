/*eslint-disable react/prop-types*/
import { useContext } from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const [cantCarrito] = useContext(CartContext)

    return (
        <>
            <div>
            <Link to='/cart' className='linkCarrito'>
                <div className='estiloCarrito'>
                    <p>🛒<span style={{color:"white"}}>{cantCarrito}</span></p>
                </div>
            </Link>
            </div>
        </>
    )
}

export default CartWidget