import CartWidget from "../CartWidget/CartWidget"
import ButtonComponent from "../ButtonComponent/ButtonComponent"

const NavBar = () => {
    const divNavBar = {
        display: 'flex',
        justifyContent: 'center',
    }
    const btnsNavBar = {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        gap: '50px',
        width: '100%',
        borderBottom: '1px solid rgb(90, 145, 197)',
        borderColor: 'rgba(30, 80, 173, 0.774)'
    }
    const cartWidget = {
        display: 'flex',
        justifyContent: 'space-Between',
        backgroundColor: 'rgb(90, 145, 197)',
        borderRadius: '40px',
        paddingInline: '30px'
    }


    return (
        <nav>
            <div style={cartWidget}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <img style={{ width: '250px' }} src='https://farmaciamontesini.com.ar/index_files/FM-logo2380.png' alt="Logo Farmacia" />
                </div>
                <div>
                    <CartWidget />
                </div>
            </div>

            <div style={divNavBar}>
                <div style={btnsNavBar}>
                    <ButtonComponent texto='Farmacia' />
                    <ButtonComponent texto='Dermocosmética' />
                    <ButtonComponent texto='Perfumería' />
                </div>
            </div>
        </nav>
    )
}

export default NavBar