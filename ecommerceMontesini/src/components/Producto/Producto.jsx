import { useParams } from "react-router-dom"


const ProductoComp = () =>{
    const {prodId}=useParams()

    
    return(
        <>
        <div>
            <h1>Producto {prodId}</h1>
        </div>
        </>
    )
}

export default ProductoComp