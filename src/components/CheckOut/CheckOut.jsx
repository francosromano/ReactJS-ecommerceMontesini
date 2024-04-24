/* eslint-disable no-undef */
import { useContext, useState } from 'react'
import './CheckOut.css'
import { useForm } from 'react-hook-form'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../../Firebase/Firebase'
// import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import imagenDomicilio from "../../assets/envioDomicilio.png"
import imagenTienda from "../../assets/retiroTienda.png"
import imgEfectivo from "../../assets/imgEfectivo.png"
import imgPagoVirtual from "../../assets/imgPagoVirtual.png"


const CheckOut = () => {

    const [datoPedido, setDatoPedido] = useState("")
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

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
        const fechaCompra = new Date().toLocaleString()
        return (
            Swal.fire({
                title: "¿Estás seguro?",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirmar compra",
                cancelButtonText: "Cancelar",
                backdrop: "rgba(0,0,0,0.943)"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: `¡Compra realizada con éxito! \n Realizada: ${fechaCompra}`,
                        html: `Será redirigido a la página de inicio en: <b></b> `,
                        timer: 5000,
                        didOpen: () => {
                            Swal.showLoading()
                            const temporizador = Swal.getPopup().querySelector("b")
                            tiempoRestante = setInterval(() => {
                                const tiempoRestante = Swal.getTimerLeft() / 1000
                                temporizador.textContent = `${tiempoRestante.toFixed(1).charAt(0)}`
                            }, 10)
                        },
                        icon: "success"
                    }).then(() => {
                        window.location.href = '/'
                    });
                    vaciarCarrito()
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    window.location.href = '/Checkout'
                }

            }))
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
                        <input className="btnForm" type="submit" value="Confirmar compra" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default CheckOut