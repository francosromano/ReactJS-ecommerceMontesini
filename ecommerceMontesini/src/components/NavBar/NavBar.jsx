import CartWidget from "../CartWidget/CartWidget"
import NavegacionComp from "../Navegacion/Navegacion"
import './NavBar.css'

const NavBar = () => {

    return (
        <nav>
            <div className="cartWidget">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <img style={{ width: '250px' }} src='https://farmaciamontesini.com.ar/index_files/FM-logo2380.png' alt="Logo Farmacia" />
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