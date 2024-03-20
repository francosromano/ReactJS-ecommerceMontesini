import { useState, useEffect } from "react"
import { getProductosbyID } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ItemDetailContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([null])

    const { detalle } = useParams()


    useEffect(() => {
        getProductosbyID(detalle)
            .then(resolve => {
                setProductos(resolve)
            })
            .catch(error => {
                console.error(error)
            })
    }, [detalle])

    return (
        <>
            <div>
                <h1>{greeting}</h1>
                <ItemDetail {...productos} />
            </div>
        </>
    )
}

export default ItemDetailContainer