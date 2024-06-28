import React from 'react'
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent"
import { useProducts } from '../hooks/useProducts'

const Home = () => {
  const { items } = useProducts("products");

  return (
      <ItemListContainerComponent products={items} />
  );
};

export default Home;
