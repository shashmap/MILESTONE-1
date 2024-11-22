import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Flavorscape!</h1>
      <p>Your one-stop destination for irresistible flavorful dishes!</p>
      <div className="featured-section">
        <img
          src="/images/restaurant.jpg"
          alt="Featured Cake"
          className="featured-image"
        />
        <div className="caption">
          <h2>Our Signature Chocolate Lava Cake</h2>
          <p>Experience the perfect blend of rich chocolate and gooey goodness!</p>
        </div>
      </div>
      <button className="cta-button" onClick={() => alert('Explore our delicious menu!')}>
        Explore Our Menu
      </button>
    </div>
  );
}

export default Home;
