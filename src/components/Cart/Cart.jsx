/* eslint-disable react/jsx-key */
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Cart = () => {

    const { carrito, precioTotal, vaciarCarrito, eliminarItem } = useContext(CartContext);

    const handleVaciarCarrito = (prodId) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás deshacer esta acción",
            icon: "warning",
            position: "top",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar todo",
            cancelButtonText: "Cancelar",
            backdrop: "rgba(0,0,0,0.943)"
          }).then((result) => {
            if (result.isConfirmed) {
              vaciarCarrito(prodId);                                                 
              Swal.fire({
                icon: "success",
                title: "¡Listo!",
                text: "Tus productos han sido eliminados",
                position: "top",
                backdrop: "rgba(0,0,0,0.943)"
              });
            }
          });
    }

    const handleEliminarItem = (prodId) => {
        eliminarItem(prodId)
    }

    const handleCheckOut = () => {
        alert("Será redirido a la sección de pago")
    }


    return (
        <div className='contenedorCarrito'>
            <div className='contenedorProds'>
                {   carrito.length > 0 ? (
                    carrito.map ((prod) => (
                        <div key={prod.id} className='contenedorCart'>
                            <div className='divImg'>
                                <img className="estiloImgs" src={prod.img} alt={prod.nombre} />
                            </div>
                            <div className='divDescrip'>
                                <div className='divDatoItem'>
                                    <h3 className="nombreItem"> {prod.nombre}</h3>
                                </div>
                                <div className='divPrecio'>
                                    <p className="precioItem"> Precio unitario: ${prod.precio}</p>
                                    <p>Unidades: {prod.cantidad}</p>
                                    <p>Precio total: ${(prod.precio * prod.cantidad).toFixed(2)}</p>
                                </div>
                            </div>
                            <div className='divBtnElimProd'>
                                <button className='btnElimProd' onClick={() => handleEliminarItem(prod.id)}>❌</button>
                            </div>
                        </div>
                    )) 
                ) : <h4 className='carritoVacio'>Carrito vacio</h4>}
            </div>
            <div className='contenedorTotal'>
                <h2 className='precioTotalTitulo'>Total:</h2>
                <h3 className='precioTotal'>${precioTotal().toFixed(2)}</h3>
                {carrito.length > 0 ?
                    <>
                        <button className='vacCarr' onClick={handleVaciarCarrito}>🗑️</button>
                        <Link to={'/CheckOut'} >
                            <button className='btnCheckOut' onClick={handleCheckOut}>Finalizar compra</button> 
                        </Link>
                        
                    </> : ""
                }
            </div>

        </div>
    )
}

export default Cart