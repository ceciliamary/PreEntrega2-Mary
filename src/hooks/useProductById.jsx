import React from 'react'
import { getProductById } from '../services/products'

export const useProductById = (id) => {
    const [product, setProduct] = React.useState({});
    const [error, setError] = React.useState({});

React.useEffect (() => {
    getProductById(id)
    .then((res) => {
        setProduct(res.data);
    })
    .catch((error) => {
        console.error(error.response);
        setError({
        isError: true,
        status: error.response.status,
        data: error.response.data,
        })
    });

}, [id]);
  return {product, error}
};

