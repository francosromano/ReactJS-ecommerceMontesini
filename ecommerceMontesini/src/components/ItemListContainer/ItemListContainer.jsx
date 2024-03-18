import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {getProductos} from '../../asyncMock'

/*eslint-disable react/prop-types*/
const ItemListContainer = ({greeting}) =>{
    
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        getProductos()
            .then (resolve =>{
                setProductos(resolve)
            })
            .catch (error => {
                console.error(error)
            })
    }, [])


    return(
        <>
        <h1>{greeting}</h1>
        <section style={{display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'10px'}}>
        <ItemList productos={productos}/>
        </section>
        </>
    )
}

export default ItemListContainer