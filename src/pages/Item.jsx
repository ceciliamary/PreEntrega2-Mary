import React from 'react'
import { useProductById } from '../hooks/useProductById'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const Item = () => {
  const { id } = useParams();
  const { product, loading } = useProductById(id);

  return loading ? <LoaderComponent /> : <ItemDetailContainer product={product} />;
};

export default Item;

/*const Item = () => {
  const {id} = useParams();
  const { product, error } = useProductById(id);

  return error.isError ? (
      <>
      Ocurrio un error <div style={{color: "red"}}>{error.data}</div>, por favor contactese con <a href="mailto:example@example.com">soporte tecnico</a> e indiquele el siguiente codigo: 404{error.status}
      </>
    ) : ( 
    <ItemDetailContainer product={product} />
  );
  };

export default Item
*/