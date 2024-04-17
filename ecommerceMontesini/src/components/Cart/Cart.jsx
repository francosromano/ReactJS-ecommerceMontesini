/* eslint-disable react/jsx-key */
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito, eliminarItem } = useContext(CartContext);

    const handleVaciarCarrito = () => {
        alert("Carrito vaciado")
        vaciarCarrito();
    }

    const handleEliminarItem = (prodId) => {
        eliminarItem(prodId)
    }

    const handleCheckOut = () =>{
        alert("Será redirido a la sección de pago")
    }
    return (
        <div className='contenedorCarrito'>
            <div className='contenedorProds'>            
            {
                carrito.map((prod) => (
                    <div key={prod.id} className='contenedorCart'>
                        <div className='divImg'>
                        <img className="estiloImgs" src={prod.img} alt={prod.nombre} />
                        </div>
                        <div className='divDescrip'>
                        <h3 className="nombreItem"> {prod.nombre}</h3>
                        <p className="precioItem">${prod.precio}</p>
                        <p>Precio total: ${(prod.precio * prod.cantidad).toFixed(2)}</p>
                        <p>Unidades: {prod.cantidad}</p>
                        </div>
                        <div className='divBtnElimProd'>
                        <button className='btnElimProd' onClick={() => handleEliminarItem(prod.id)}>❌</button>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className='contenedorTotal'>
                <h2>Precio total: ${precioTotal().toFixed(2)}</h2>
                    {   carrito.length > 0 ?
                    <>
                        <button className='vacCarr' onClick={handleVaciarCarrito}>🗑️</button>
                        <button className='btnCheckOut' onClick={handleCheckOut}> 
                                <Link className='linkCheckOut' to={'/CheckOut'} >Finalizar compra </Link>
                        </button>
                    </>    : <h1>Tu carrito está vacío </h1>
                    }    
            </div>

        </div>
    )
}

export default Cart