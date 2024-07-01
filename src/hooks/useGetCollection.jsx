import React from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export const useGetCollection = (collectionName) => {
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  
  React.useEffect(() => {
    const db = getFirestore();

    const productsCollection = collection(db, collectionName);
    getDocs(productsCollection)
    .then((snapshot) => {
      setItems(
      snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
    })
    .catch((error) => console.log(error)) 
    .finally(() => setLoading(false));
    
  }, []);
  return { items };
};


