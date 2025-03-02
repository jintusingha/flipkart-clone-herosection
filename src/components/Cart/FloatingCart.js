import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./FloatingCart.css";

const FloatingCart = () => {
  
  const [cartCount, setCartCount] = useState(3); 

  return (
    <div className="floating-cart">
      <button className="cart-button">
        <FaShoppingCart size={24} />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>
    </div>
  );
};

export default FloatingCart;
