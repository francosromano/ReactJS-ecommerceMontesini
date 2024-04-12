/* eslint-disable react/jsx-key */
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () =>{

    const [cantCarrito, vaciarCarrito, eliminarItem] =useContext(CartContext)    
    
    const handleVaciarCarrito = () =>{
        alert("Carrito vaciado")
        vaciarCarrito()
    }

    const handleEliminarItem = (id) =>{
        alert("Item Eliminado")
        eliminarItem(id)
    }

    const handleCheckOut = () =>{
        alert("Será redirido a la sección de pago")
    }

    return(
        <>
        <section>
            {cantCarrito > 0 ? (
                cantCarrito.map((prod) => (
                  <div key={prod.id} className="contenedorCard">
                      <img className="estiloImg" src={prod.img} alt={prod.nombre} />
                      <h3 className="nombreItem"> {prod.nombre}</h3>
                      <p className="precioItem">${prod.precio}</p>
                      <button onClick={handleVaciarCarrito}>🗑️</button>
                      <button onClick={()=>handleEliminarItem(prod.id)}>❌</button>
                   </div>
                ))) : (<h1>Tu carrito está vacío</h1>)
             }
        </section>
                <button onClick={handleCheckOut}> <Link to={'/CheckOut'} >Finalizar compra </Link> </button>


        </>
    )
}

export default Cart













// const [cantCarrito, setCantCarrito] = useState([])
    // const cantidadEnCarrito = cantCarrito.reduce(
    //     (acc, prod) => acc + prod.quantity,
    //     0
    //   );
    
    //   const vaciarCarrito = () => {
    //     setCantCarrito([]);
    //   };
    //   const precioTotal = cantCarrito.reduce(
    //     (acc, prod) => acc + prod.quantity * prod.price,
    //     0
    //   );
    
    //   const deleteProduct = (id)=>{
    //     setCantCarrito(cantCarrito.filter(prod=>prod.id != id))
    //   }
    // return(
    //     <>
    //     <h1>Carrito</h1>
    //     <Cart.Provider
    //     value={{
    //     cantCarrito,
    //     setCantCarrito,
    //     cantidadEnCarrito,
    //     vaciarCarrito,
    //     precioTotal,
    //     deleteProduct
    //   }}
    // >
    //   {children}
    // </Cart.Provider>

    // return(
    //     <>
    //     <h1>Carrito</h1>
    //     <p>¿Como vamos a renderizar las cosas?😰😰</p> 

    //     <button>Finalizar compra</button>
    //     </>
    // )