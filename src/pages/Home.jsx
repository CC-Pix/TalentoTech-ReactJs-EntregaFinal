import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ addToCart }) => {
  return (
    <div>
      <h1>Inicio</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Home;
