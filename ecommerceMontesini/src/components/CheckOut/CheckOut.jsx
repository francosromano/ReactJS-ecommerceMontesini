/* eslint-disable no-undef */
import { useContext, useState } from 'react'
import './CheckOut.css'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../../Firebase/Firebase'
import { Link } from 'react-router-dom'

import imagenDomicilio from "../../assets/envioDomicilio.png"
import imagenTienda from "../../assets/retiroTienda.png"
import imgEfectivo from "../../assets/imgEfectivo.png"
import imgPagoVirtual from "../../assets/imgPagoVirtual.png"

const CheckOut = () => {

    const [datoPedido, setDatoPedido] = useState("")
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm()

    const datosCliente = (datosCliente) => {
        const datosCompra = {
            datosCliente: datosCliente,
            compra: carrito,
            totalCarrito: precioTotal()
        }
        console.log(datosCompra)

        const pedidos = collection(database, "pedidos")
        addDoc(pedidos, datosCompra)
            .then((docPedido) => {
                setDatoPedido(docPedido.id)
                vaciarCarrito()
            })
    }

    if (datoPedido) {
        return (
            <div>
                {alert(`Muchas gracias por tu compra ${datoPedido}`)}
                {<Link to="/">Volver</Link>}
            </div>
        )
    }
    return (
        <>
            <h1>Confirmar compra</h1>

            <div>
                <h2>Seleccione metodo de recepción</h2>
                <div className='divSeleccion'>
                    <div className='opcionSeleccion'>
                        <h3 className='tituloSeleccion'>Envio a domicilio</h3>
                        <img className='imgSeleccion' src={imagenDomicilio} alt="Imagen envio a domicilio" />
                    </div>
                    <div className='opcionSeleccion'>
                        <h3 className='tituloSeleccion'>Retiro en tienda</h3>
                        <img className='imgSeleccion' src={imagenTienda} alt="Imagen retirar en tienda" />
                    </div>
                </div>
            </div>
            <div>
                <h2>Seleccione metodo de pago</h2>
                <div className='divSeleccion'>
                    <div className='opcionSeleccion'>
                        <h3 className='tituloSeleccion'>Efectivo al recibir</h3>
                        <img className='imgSeleccion' src={imgEfectivo} alt="Imagen Efectivo" />
                    </div>
                    <div className='opcionSeleccion'>
                        <h3 className='tituloSeleccion'>Pago virtual</h3>
                        <img className='imgSeleccion' src={imgPagoVirtual} alt="Imagen pago virtual" />
                    </div>
                </div>
            </div>

            <div >
                <div className='divDatos'>
                <h2>Datos del comprador</h2>
                    <form className='formCompra' onSubmit={handleSubmit(datosCliente)}>
                        <label className="labelForm" htmlFor="nombre">Nombre: </label>
                        <input className="inputForm" id="nombre" type="text" {...register("Nombre")} />

                        <label className="labelForm" htmlFor="mail">Email: </label>
                        <input className="inputForm" id="mail" type="email" {...register("Email")} />

                        <label className="labelForm" htmlFor="telefono">Telefono de contacto: </label>
                        <input className="inputForm" id="telefono" type="number" {...register("Telefono")} />

                        <textarea placeholder='Aclaraciones' cols="30" rows="10" {...register("Aclaraciones")}></textarea>
                        <input className="btnForm" type="submit" value="Confirmar compra"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CheckOut