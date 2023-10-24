import React from "react";
import { acData } from "../data/ac";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useCart } from "../context/CartContext";

// AcSingle component displays details of a single AC product
const AcSingle = () => {
  // Get the 'id' parameter from the URL using useParams
  const { id } = useParams();

  // Access the 'addToCart' function and 'cartItems' state from the CartContext
  const { addToCart, cartItems } = useCart();

  // Find the product with the matching 'id' in the AC data
  const product = acData.find((item) => item.id === id);

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default AcSingle;
