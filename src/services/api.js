import axios from 'axios';

const API_URL = 'https://687319fec75558e273535438.mockapi.io';

export const getProductos = () => axios.get(`${API_URL}/productos`);
export const createProducto = (producto) => axios.post(`${API_URL}/productos`, producto);
export const updateProducto = (id, producto) => axios.put(`${API_URL}/productos/${id}`, producto);
export const deleteProducto = (id) => axios.delete(`${API_URL}/productos/${id}`);
