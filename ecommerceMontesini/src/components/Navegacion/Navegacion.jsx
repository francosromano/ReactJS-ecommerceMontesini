import {Link} from 'react-router-dom'
import './Navegacion.css'

const NavegacionComp = () =>{
    return(
        <>
        <div className='estiloNavegacion' >
            <Link to={'/farmacia'}><button className='btnNavegacion'>Farmacia </button></Link>
            <Link to={'/perfumeria'}><button className='btnNavegacion'>Perfumeria </button></Link>    
            <Link to={'/dermocosmetica'}><button className='btnNavegacion'>Dermocosmética </button></Link>
        </div>
        </>
    )
}

export default NavegacionComp