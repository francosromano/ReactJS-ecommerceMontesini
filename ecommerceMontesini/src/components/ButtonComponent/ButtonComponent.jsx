/*eslint-disable react/prop-types*/
const ButtonComponent = ({texto}) => {
    const miEstilo ={
        backgroundColor:'transparent',
        border:'none',
        cursor:'pointer',
        fontSize:'20px',
    }
    
    return(
        <>
        <button style={miEstilo}>{texto}</button>
        </>
    )
}

export default ButtonComponent