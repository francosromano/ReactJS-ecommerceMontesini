import { useNavigate } from "react-router-dom"

const ProductosComp = () =>{

    const navigate = useNavigate()

    const handleClick = () =>{
        navigate ('/producto/1')            //O donde sean
    }

    return(
        <>
        <div>
            <h1>Producto</h1>
            <button onClick={handleClick}>Descripción</button>
        </div>
        </>
    )
}

export default ProductosComp