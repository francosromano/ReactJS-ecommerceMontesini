import './CheckOut.css'

const CheckOut = () => {

    return (
        <>
            <h1>CheckOut</h1>
            <div>
                <h2>Seleccione metodo recepcion</h2>
                <div>
                    <div>
                        <h3>Envio a domicilio</h3>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h3>Retiro en tienda</h3>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2>Seleccione metodo de pago</h2>
                <div>
                    <div>
                        <h3>Efectivo al recibir</h3>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <h3>Pago virtual</h3>
                        <img src="" alt="" />
                    </div>
                </div>
                <div>
                    <h2>Datos del comprador</h2>
                    <div>
                        <div>
                            <form action="">
                                <label htmlFor="Nombre">Nombre</label>
                                <input type="text"/>

                                <label htmlFor="mail">Email</label>
                                <input type="text"/>

                                <label htmlFor="telefono">Telefono de contacto</label>
                                <input type="text"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut