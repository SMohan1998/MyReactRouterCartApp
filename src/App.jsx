import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import ProductsPage from "./pages/Productspage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";

export default function App(){
  const[cart, setCart]=useState([]);
  const addToCart =(product)=>{
    const existingProduct = cart.find((item) => item.id === product.id);
    if(existingProduct)
    {
      alert("Items already added to cart!")
      return;
    }
    setCart([...cart, {...product, quantity:1}]);
    alert("Items added to cart successfully");
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    alert("Item removed from cart!");
  };
  return(
        <div>
          <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart}/>} />
        <Route path="/products" element={<ProductsPage addToCart={addToCart}/>} />
        </Routes>
        </div>
  );
}