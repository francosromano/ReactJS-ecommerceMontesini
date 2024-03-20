import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getProductosbyCategoria } from '../../asyncMock'
import { useParams } from "react-router-dom"

/*eslint-disable react/prop-types*/
const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    const { categoria } = useParams()

    useEffect(() => {
        const asyncFunc = categoria ? getProductosbyCategoria : getProductos

        asyncFunc(categoria)
            .then(resolve => {
                setProductos(resolve)
            }).catch(error => {
                console.error(error)
            })
    }, [categoria])

    return (
        <>
            <h1>{greeting}</h1>
            <section className="contItem">
                <ItemList productos={productos} />
            </section>
        </>
    )
}

export default ItemListContainer