import React from 'react'
import { getAllProducts } from "../services/products"; 
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export const useProducts = () => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);
  
  React.useEffect(() => {
    const db = getFirestore();

    const productsCollection = collection(db, "products");
    getDocs(productsCollection)
    .then((snapshot) => {
      setProducts(
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
    })
    .catch((error) => console.log(error)) 
    .finally(() => setLoading(false));
    
  }, []);
  return { products };
};


