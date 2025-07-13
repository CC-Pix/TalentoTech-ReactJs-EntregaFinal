import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCarrito } from '../context/carritoContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { carrito } = useCarrito();

  if (!user) return null;

  return (
    <nav className="navbar">
      <h2>🍍 Vida Sana</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ul className="navbar-links">
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/carrito">Carrito ({carrito.length})</Link></li>
        </ul>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
