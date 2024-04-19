/* eslint-disable react/prop-types */
import { doc, updateDoc } from "firebase/firestore"
import { createContext, useState } from "react"
import { database } from "../Firebase/Firebase"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const actualizarStock = async (itemId, nuevoStock) => {
        try {
            if (database && itemId) {
                const docRef = doc(database, "productos", itemId)
                await updateDoc(docRef, { stock: nuevoStock })
            } else {
                console.error("Error: database o itemId es undefined.")
            }
        } catch (error) {
            console.error("Error al actualizar el stock en la base de datos:", error)
        }
    }
    

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad }

        const carritoActualizado = [...carrito]
        const itemRepetido = carritoActualizado.find((producto) => producto.id === itemAgregado.id)

        if (itemRepetido) {
            itemRepetido.cantidad += cantidad
        } else {
            carritoActualizado.push(itemAgregado)
        }

        const stockModificado = item.stock - cantidad
        const itemActualizado = { ...item, stock: stockModificado }

        actualizarStock(itemActualizado.id, stockModificado)

        setCarrito(carritoActualizado)
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarrito = async () => {
        try {
            for (const producto of carrito) {
                const nuevoStock = producto.stock
                await actualizarStock(producto.id, nuevoStock)
            }
            setCarrito([])
        } catch (error) {
            console.error("Error al vaciar el carrito y devolver el stock:", error)
        }
    }
    
     const eliminarItem = async (productId) => {
        const nuevoCarrito = [...carrito]
        const producto = nuevoCarrito.find((prod) => prod.id === productId)

        if (producto) {
            if (producto.cantidad > 1) {
                producto.cantidad -= 1
                await actualizarStock(productId, producto.stock - 1)
                setCarrito(nuevoCarrito)
            } else {
                const index = nuevoCarrito.findIndex((prod) => prod.id === productId)
                nuevoCarrito.splice(index, 1)
                await actualizarStock(productId, producto.stock)
                setCarrito(nuevoCarrito)
            }
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