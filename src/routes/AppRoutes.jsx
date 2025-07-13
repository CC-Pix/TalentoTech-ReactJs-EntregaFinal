import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Cart from '../components/Cart';

const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true';
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  return (
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart} />} />
      <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart items={cartItems} />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/protected"
        element={
          <ProtectedRoute>
            <h1>Contenido protegido</h1>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
