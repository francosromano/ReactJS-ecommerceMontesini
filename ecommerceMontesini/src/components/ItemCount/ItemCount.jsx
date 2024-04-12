/* eslint-disable react/prop-types */
import { useState } from "react";
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import './ItemCount.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ stock, nombre,}) => {
    const [contador, setContador] = useState(0);
    
    const {cantCarrito,setCantCarrito} =useContext(CartContext)

    const handleMenos = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    const handleMas = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const handleAgregar = () => {

        const agregarItem = (prod,cantidad) =>{

        const itemAgregado = { ...prod, cantidad };

        const carritoActualizado = [...cantCarrito];

        const itemRepetido = carritoActualizado.find((producto) => producto.id === itemAgregado.id);

        if (itemRepetido) {
            itemRepetido.cantidad += cantidad;
        } else {
            carritoActualizado.push(itemAgregado);
        }
        setCantCarrito(carritoActualizado);
        }

        if (contador !== 0 && contador > 0) {
            agregarItem(contador)
            Toastify({
                text: `¡ ${nombre} agregado al carrito! 🛒 `,
                duration: 1500,
                gravity: 'top',
                position: "right",
                style: {
                    background: "linear-gradient(to left, #008000, #10B02D)",
                    borderRadius: '20px'
                }
            }).showToast()
            setContador(0)
        } else {
            Toastify({
                text: `Ingrese cantidad deseada`,
                duration: 2000,
                gravity: 'top',
                position: "center",
                style: {
                    background: "linear-gradient(to left, red, #e4302b)",
                    borderRadius: '20px'
                }
            }).showToast()
        }
    };

    return (
        <>
            <div>
                <div>
                    <button className="btnContador" onClick={handleMenos}>-</button>
                    <input className="inputContador" value={contador} readOnly />
                    <button className="btnContador" onClick={handleMas}>+</button>
                </div>
                <button className="btnComprar" onClick={handleAgregar} disabled={stock === 0}>Agregar</button>
            </div>
        </>
    );
};

export default ItemCount;



