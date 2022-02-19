import React, { useState, useEffect } from "react";
import Axios from "axios";
import { IProduct } from "../../../types/IProduct";

const fetchProducts = () => {
  return Axios.get(`https://localhost:3333/products/`).then(
    (response) => response.data
  );
};

export const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts()
      .then((date) => {
        setProducts(date);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <h1>Loading producss list...</h1>;
  }
  return (
    <div className="container">
      <h1>Products List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Detail</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <a href="#" onClick={() => {}}>
                  Detail
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
