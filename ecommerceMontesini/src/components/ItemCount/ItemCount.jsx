import { useState } from "react"
import './ItemCount.css';

/*eslint-disable react/prop-types*/
const ItemCount = ({ stock }) => {

    const [contador, setContador] = useState(0)

    const handleMenos = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const handleMas = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const handleAgregar = () => {
        if (contador !== 0 && contador !== 1) {
            console.log(`Se agregaron: ${contador} productos `);
        }
        else if (contador === 1) {
            console.log(`Se agregó: ${contador} producto`);
        }
    }

    return (
        <>
            <div>
                <div>
                    <button className="btnContador" onClick={handleMenos}>-</button>
                    <input className="inputContador" type="text" value={contador} />
                    <button className="btnContador" onClick={handleMas}>+</button>
                </div>
                <button className="btnComprar" onClick={handleAgregar} disabled={stock === 0}> Agregar </button>
            </div>
        </>
    )
}

export default ItemCount