import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailContainer = () => {
  const params = useParams();

  return <div>ProductDetailContainer: {params.id}</div>;
};

export default ProductDetailContainer;
