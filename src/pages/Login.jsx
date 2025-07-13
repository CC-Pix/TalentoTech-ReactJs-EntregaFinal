import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="container">
      <h2 className="titulo-productos">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="card" style={{ maxWidth: 400, margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Usuario"
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
            required
          />
        </div>
        <button type="submit" className="btn-agregar" style={{ width: '100%' }}>
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
