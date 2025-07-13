import React, { useState, useEffect } from 'react';
import {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
} from '../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCarrito } from '../context/carritoContext';

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const { agregarAlCarrito } = useCarrito();

  const fetchProductos = async () => {
    try {
      setCargando(true);
      const { data } = await getProductos();
      setProductos(data);
    } catch {
      toast.error('Error al cargar productos');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <div>
      <ToastContainer />
      <h2 className="titulo-productos">Productos</h2>
      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="card">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p><strong>${producto.precio}</strong></p>
              <button className="btn-agregar" onClick={() => agregarAlCarrito(producto)}>
                🛒 Agregar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
