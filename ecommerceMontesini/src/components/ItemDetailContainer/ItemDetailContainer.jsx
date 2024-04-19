/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { database } from "../../Firebase/Firebase"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { nombre } = useParams()
   
    useEffect(() => {
        const obtenerDetalleProducto = async () => {
            try {
                const docRef = doc(database, "productos", nombre)
                const docSnap = await getDoc(docRef)
                if (docSnap.exists()) {
                    const data = docSnap.data()
                    setItem({ id: docSnap.id, ...data })
                } else {
                    setItem(null)
                }
            } catch (error) {
                setItem(null)
            }
        };

        if (nombre) {
            obtenerDetalleProducto()
        }
    }, [nombre])

    return (
        <div>
            {item ? <ItemDetail {...item} /> : <p>Cargando...</p>}
        </div>
    )
}

export default ItemDetailContainer

