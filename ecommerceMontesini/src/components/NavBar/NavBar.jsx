import CartWidget from "../CartWidget/CartWidget"
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

            <div>
                <div className="btnsNavBar">
                    <Link to={'/farmacia'}><button className='btnNavegacion'>Farmacia </button></Link>
                    <Link to={'/perfumeria'}><button className='btnNavegacion'>Perfumeria </button></Link>
                    <Link to={'/dermocosmetica'}><button className='btnNavegacion'>Dermocosmética </button></Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar