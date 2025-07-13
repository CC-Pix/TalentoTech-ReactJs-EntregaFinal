import React from 'react';
import { useCarrito } from '../context/carritoContext';
import Navbar from './Navbar';

const Cart = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();

  return (
    <>

    <div className="container">
      <h2 className="titulo-productos">Tu Carrito</h2>

      {carrito.length === 0 ? (
        <p style={{ fontSize: '18px' }}>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-list">
            {carrito.map((item, idx) => (
              <li key={idx} className="cart-item">
                <span>
                  <strong>{item.nombre}</strong> - ${item.precio}
                </span>
                <button onClick={() => eliminarDelCarrito(item.id)} className="btn-eliminar">
                  Eliminar
                </button>
              </li>
            ))}
          </ul>

          <button onClick={vaciarCarrito} className="btn-vaciar">
            Vaciar carrito
          </button>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;
