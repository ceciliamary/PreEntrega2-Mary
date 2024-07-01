import React from 'react'
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent"
import { useGetCollection } from '../hooks/useGetCollection'

const Home = () => {
  const { items } = useGetCollection("products");

  return (
      <ItemListContainerComponent products={items} />
  );
};

export default Home;
