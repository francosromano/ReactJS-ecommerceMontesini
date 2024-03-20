import {Link} from 'react-router-dom'
import './Navegacion.css'

const NavegacionComp = () =>{
    return(
        <>
        <div className='estiloNavegacion' >
            <Link to={'/categoria/farmacia'}><button className='btnNavegacion'>Farmacia </button></Link>
            <Link to={'/categoria/perfumeria'}><button className='btnNavegacion'>Perfumeria </button></Link>    
            <Link to={'/categoria/dermocosmetica'}><button className='btnNavegacion'>Dermocosmética </button></Link>
        </div>
        </>
    )
}

export default NavegacionComp