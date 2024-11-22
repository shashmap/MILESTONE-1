import React from 'react';
import { useCart } from '../CartContext';
import CakesData from '../FoodData';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('₹', '').replace('$', ''));
    return acc + price;
  }, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty! Start adding your favorite items.</p>
      ) : (
        <div className="cart-items">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>Price: {item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-item-btn"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Total: ₹{total.toFixed(2)}</h2>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
