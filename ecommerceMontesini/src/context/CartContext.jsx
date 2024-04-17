/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const carritoActualizado = [...carrito];
        const itemRepetido = carritoActualizado.find((producto) => producto.id === itemAgregado.id);

        if (itemRepetido) {
            itemRepetido.cantidad += cantidad;
        } else {
            carritoActualizado.push(itemAgregado);
        }
        setCarrito(carritoActualizado);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const eliminarItem = (productId) => {
        const nuevoCarrito = [...carrito];
        const producto = nuevoCarrito.find((prod) => prod.id === productId);
    
        if (producto) {
            if (producto.cantidad > 1) {
                producto.cantidad -= 1; 
            } else {
                const index = nuevoCarrito.findIndex((prod) => prod.id === productId);
                nuevoCarrito.splice(index, 1);
            }
            setCarrito(nuevoCarrito);
        }
    }
    

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            eliminarItem,
            precioTotal,
            vaciarCarrito,
        }}>
            {children}
        </CartContext.Provider>
    )
}