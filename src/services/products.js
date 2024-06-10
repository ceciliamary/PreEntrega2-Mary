import axios from "axios";

export async function getAllProducts () {
    return axios.get('https://dummyjson.com/products');
}

export async function getProductById (id) {
    return axios.get(`https://dummyjson.com/products/${id}`);
}