import React, { useState } from "react";
import "./App.css";

import {ProductDetail} from "./pages/Products/Detail";
import {ProductList} from "./pages/Products/List";

function App() {
  return <div className="App">
    <ProductList />
  </div>;
}

export default App;
