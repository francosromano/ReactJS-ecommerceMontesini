import "./Footer.css"
const Footer = () =>{
    return(
        <footer>

        <section className="serviciosSection">
            <h2 className="h2Section fs-3 fw-bold mt-1 mb-4">Servicios</h2>
            <ul className="ulSection p-0">
                <li className="liSection mb-4 text-start"> <a className="aSection" href="mapadomicilio.html">Envios a
                        domicilio</a></li>
                <li className="liSection mb-4 text-start"> <a className="aSection" href="servicios.html">Gabinete</a> </li>
                <li className="liSection mb-4 text-start"> <a className="aSection" href="servicios.html">Reserva de
                        medicamentos</a> </li>
            </ul>
        </section>

        <section>
            <h2 className="h2Section fs-3 fw-bold mt-1 mb-4">Horarios de atención</h2>
            <ul className="ulSection p-0">
                <li className="liFooter fw-bold m-1">Lunes a Viernes</li>
                <li>8.30 a 13.30hs 15.30 a 20.30hs</li>
                <li className="liFooter fw-bold m-1">Sábados</li>
                <li>8.30 a 13.30hs 17 a 20.30hs</li>
                <li className="liFooter fw-bold m-1">Domingos: Cerrado</li>
            </ul>
        </section>

        <section className="contactoSection">
            <h2 className="h2Section fs-3 fw-bold mt-1 mb-4">Contacto</h2>
            <ul className="ulSection p-0">
                <li className="liSection mb-4 text-start"> <a className="aSection"
                        href="https://api.whatsapp.com/message/PEPW73BR2VMGO1?autoload=1&app_absent=0"
                        target="_blank">Whatsapp</a>
                </li>
                <li className="liSection mb-4 text-start"> <a className="aSection" href="error404.html">Teléfono</a> </li>
                <li className="liSection mb-4 text-start"> <a className="aSection" href="error404.html">Email</a> </li>
            </ul>
        </section>

        <section className="mapaSection">
            <h2 className="h2Section fs-3 fw-bold mt-1 mb-4">¿Dónde estamos?</h2>
            <iframe className="iframeSection mb-2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13130.351622638833!2d-58.46925384797968!3d-34.63985283460131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca2b18663ecd%3A0x7f2847869655d26c!2sGran%20Farmacia%20-%20Optica%20Montesini!5e0!3m2!1ses-419!2sar!4v1696258234982!5m2!1ses-419!2sar"
                width="200" height="150" allowfullscreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            <a href="html/error404.html"><button className="btnGeneral">¿Cómo llegar?</button></a>

        </section>

    </footer>
    )
}

export default Footer