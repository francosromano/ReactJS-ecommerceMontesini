/* eslint-disable react/prop-types */

import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ cantidad, nombre, stock, handleRestar, handleSumar, handleAgregar }) => {
  const [, setContador] = useState()

  const handleAgregarClick = () => {
      if (cantidad !== 0 && cantidad > 0) {
          Toastify({
              text: `¡ ${nombre} agregado al carrito! 🛒 `,
              duration: 1500,
              gravity: 'top',
              position: 'right',
              style: {
                  background: 'linear-gradient(to left, #008000, #10B02D)',
                  borderRadius: '20px',
              },
          }).showToast()
          setContador(0)
      } else {
          Toastify({
              text: `Ingrese cantidad deseada`,
              duration: 2000,
              gravity: 'top',
              position: 'center',
              style: {
                  background: 'linear-gradient(to left, red, #e4302b)',
                  borderRadius: '20px',
              },
          }).showToast()
      }
      handleAgregar(cantidad)

  }

  return (
      <div className="btnContainer">
          <div className="btnsContador">
              <button className="btnContador" onClick={handleRestar}>
                  -
              </button>
              <p>{cantidad}</p>
              <button className="btnContador" onClick={handleSumar}>
                  +
              </button>
          </div>
          <button
              className="btnComprar"
              onClick={handleAgregarClick}
              disabled={stock === 0}
              style={{ backgroundColor: stock === 0 ? 'grey' : '' }}
          >
              Agregar
          </button>
      </div>
  )
}

export default ItemCount