import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Productos from './components/ProductList';
import Carrito from './components/Cart';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const { user } = useAuth();

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={!user ? <Login /> : <Navigate to="/productos" />} />
      <Route path="/productos" element={user ? <Productos /> : <Navigate to="/" />} />
      <Route path="/carrito" element={user ? <Carrito /> : <Navigate to="/" />} />
    </Routes>
    </>
  );
}

export default App;
