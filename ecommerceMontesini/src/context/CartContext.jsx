import { createContext, useState } from "react"

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types, no-unused-vars
export function CartProvider({ children }) {
    const [cantCarrito, setCantCarrito] = useState([]);

    const itemAgregado = (producto) => {
        setCantCarrito([...cantCarrito,producto]);
    };
    
    const eliminarItem = (itemId) =>{
        const carritoActualizado = cantCarrito.filter(prod => prod.id !== itemId)
        setCantCarrito(carritoActualizado)
    }

    const vaciarCarrito = () =>{
        setCantCarrito([0])
    }
    
    return (
        <CartContext.Provider value={ [cantCarrito, itemAgregado, eliminarItem, vaciarCarrito] }>
            { children }
        </CartContext.Provider>
    )
}


// //Creamos contexto
// export const CartContext = createContext()

// //Proveedor de contexto
// export function CartProvider({children}) {
//     const [cantCarrito , setCantCarrito] = useState([])


//     return (
//         <CartContext.Provider value={[cantCarrito,setCantCarrito]}>
//             {children}
//         </CartContext.Provider>
//     )
// }
    


