import { useState, useEffect } from "react"
import { getProductosbyName } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([null])

    const { nombre } = useParams()


    useEffect(() => {
        getProductosbyName(nombre)
            .then(resolve => {
                setProductos(resolve)
            })
            .catch(error => {
                console.error(error)
            })
    }, [nombre])

    return (
        <>
            <div>
                <ItemDetail {...productos} />
            </div>
        </>
    )
}

export default ItemDetailContainer