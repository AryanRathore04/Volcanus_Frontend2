import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Product_Detail from "./pages/Product_Detail";
import Related_Product from "./pages/Related_Product";
import Search_Product from "./pages/Search_Product";
import { items } from "./data";
import Cart from "./pages/Cart";

const App = () => {
  const [data, setdata] = useState(items);
  const [cart, setcart] = useState([])
  
  const addTocart = (product) => {
    setcart([...cart, product]);
    console.log("my cart",cart);
    Math.random();
  }
  return (
    <>
      <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<Products data={data} addTocart={addTocart} />}
          />
          <Route path="/product/:id" element={<Product_Detail />} />
          <Route path="/search/:term" element={<Search_Product />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
