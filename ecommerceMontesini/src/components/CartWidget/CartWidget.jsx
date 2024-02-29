/*eslint-disable react/prop-types*/
const CartWidget = () => {

    const estilo = {
        display:'flex',
        justifyContent:'center',
        fontWeight:'bolder',
        fontSize:'20px',
        backgroundColor:'rgba(22, 63, 139, 0.774)',
        width:'50px'
    }
    
    return (
        <>
            <div>
                <div style={estilo}>
                    <p>🛒</p>
                    <p style={{color:"white"}}>0</p>
                </div>
            </div>
        </>
    )
}

export default CartWidget