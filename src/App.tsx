import React, { useState } from "react";
import "./App.css";

import { ProductDetail } from "./pages/Products/Detail";
import { ProductList } from "./pages/Products/List";

function App() {
  const [productId, setProductId] = useState<number | null>(null);
  const onProductDetail = (id: number) => {
    setProductId(id);
  };
  return (
    <div className="App">
      {productId !== null ? (
        <ProductDetail id={productId} />
      ) : (
        <ProductList onProductDetail={onProductDetail} />
      )}
    </div>
  );
}

export default App;
