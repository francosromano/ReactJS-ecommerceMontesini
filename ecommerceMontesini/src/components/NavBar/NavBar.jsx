import CartWidget from "../CartWidget/CartWidget"
import NavegacionComp from "../Navegacion/Navegacion"
import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {

    return (
        <nav>
            <div className="cartWidget">
                <div className="logoNavBar">
                    <Link to={`/`}><img className="imgLogo" src='https://farmaciamontesini.com.ar/index_files/FM-logo2380.png' alt="Logo Farmacia" /></Link>
                </div>

                <div>
                    <CartWidget />
                </div>
            </div>

            <div className="divNavBar">
                <div className="btnsNavBar">
                    <NavegacionComp />
                </div>
            </div>
        </nav>
    )
}

export default NavBar