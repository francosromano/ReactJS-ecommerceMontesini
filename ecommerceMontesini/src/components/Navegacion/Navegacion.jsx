import {Link} from 'react-router-dom'

const NavegacionComp = () =>{
    return(
        <>
        <div style={{marginBottom:'30px', display:'flex', gap:'10px'}}>
            <Link to={'/farmacia'}><button>Farmacia </button></Link>
            <Link to={'/dermocosmetica'}><button>Dermocosmética </button></Link>
            <Link to={'/perfumeria'}><button>Perfumeria </button></Link>/
        </div>
        </>
    )
}

export default NavegacionComp