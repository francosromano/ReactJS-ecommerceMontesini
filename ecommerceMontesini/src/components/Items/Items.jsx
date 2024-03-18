import ItemCount from "../ItemCount/ItemCount"
import './Items.css'
// eslint-disable-next-line react/prop-types, no-unused-vars
const Item = ({ nombre, precio, img, stock }) => {


    return (
        <>
            <div className="contenedorCard">
                <img className="estiloImg" src={img} alt={nombre} />
                <button className="btnGeneral">Ver detalles</button>
                <h3 style={{ margin: '0px', marginBottom: '5px' }}> {nombre}</h3>
                <h5 style={{ margin: '0px', marginBottom: '5px', fontWeight: '100', color: 'grey' }}>Disponible: {stock} unidades</h5>
                <p style={{ margin: '0px', marginBottom: '2px', fontWeight: '600', fontSize: '20px' }}>${precio}</p>
                <ItemCount className='btnGeneral' stock={stock} />
            </div>
        </>
    )
}

export default Item