import React, { useEffect, useState } from "react";
import Axios from "axios";
import { IProduct } from "../../../types/IProduct";

const fetchProduct = (id: number) => {
  return Axios.get(`http://localhost:3333/products/${id}`).then(
    (response) => response.data
  );
};

type ProductDetaulProps = {
  id: number;
};

export const ProductDetail = ({ id }: ProductDetaulProps) => {
  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchProduct(id)
      .then((data) => {
        setProduct(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading || !product) {
    return <h1>Loading product...</h1>;
  }

  return (
    <div className="container">
      <a href="#" onClick={() => {}}>
        Voltar a lista de produtos
      </a>
      <div className="row">
        <label>Id:</label>
        {product.id}
      </div>
      <div className="row">
        <label>Name:</label>
        {product.name}
      </div>
      <div className="row">
        <label>Price:</label>
        {product.price}
      </div>
      <div className="row">
        <label>Description:</label>
        {product.description}
      </div>
      <div className="row">
        <label>Image:</label>
        <img src={product.image} />
      </div>
    </div>
  );
};
