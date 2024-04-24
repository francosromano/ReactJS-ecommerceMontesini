import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where} from "firebase/firestore"
import { database } from "../../Firebase/Firebase"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        const prodColeccion = collection(database, "productos")
        let querys = prodColeccion

        if (categoria) {
            querys = query(prodColeccion, where("categoria", "==", categoria))
        }

        getDocs(querys)
            .then((response) => {
                const productosOrdenados = response.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                })).sort((a, b) => a.nombre.localeCompare(b.nombre))
                setProductos(productosOrdenados)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [categoria])

    return (
        <div className="contItemList">
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer
