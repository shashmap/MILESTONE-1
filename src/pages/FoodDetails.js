import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
import CakesData from '../FoodData';
import './FoodDetails.css';

const CakeDetails = () => {
  const { id } = useParams();
  const [cake, setCake] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const selectedCake = CakesData.find((cake) => cake.id === parseInt(id));
    setCake(selectedCake);
  }, [id]);

  if (!cake) {
    return <div className="loading">Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(cake);
    alert(`${cake.name} has been added to your cart!`);
  };

  return (
    <div className="cake-details-container">
      <div className="cake-details-card">
        <img src={cake.image} alt={cake.name} className="cake-details-image" />
        <div className="cake-details-info">
          <h1 className="cake-details-name">{cake.name}</h1>
          <p><strong>Category:</strong> {cake.category}</p>
          <p><strong>Ingredients:</strong> {cake.ingredients}</p>
          <p><strong>Price:</strong> {cake.price}</p>
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CakeDetails;
