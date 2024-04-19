import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import './NavBar.css'
import logo from "../../assets/logoCompleto.png"

const NavBar = () => {

    return (
        <nav>
            <div className="cartWidget">
                <div className="logoNavBar">
                    <Link to={`/`}><img className="imgLogo" src={logo} alt="Logo Farmacia" /></Link>
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