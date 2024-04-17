import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {doc, getDoc} from "firebase/firestore"
import { database } from "../../Firebase/Firebase"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    const nombre= useParams().nombre

    useEffect(() => {
      const docDatabase = doc(database,"productos",nombre)
      
      getDoc(docDatabase)
          .then((resp) => {
              const data = resp.data()
              setItem({...data, nombre: nombre})
          })
          .catch((error) => {
              console.error(error)
          });
  }, [nombre]);
    

  return (
    <div>
      {item ? <ItemDetail {...item}/> : <p>Cargando...</p>}
    </div>
  )
}

export default ItemDetailContainer