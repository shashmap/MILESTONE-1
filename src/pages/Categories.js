import React from 'react';
import { Link } from 'react-router-dom';
import CakesData from '../FoodData';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories-page">
      <h1 className="categories-title">Explore Our Categories</h1>
      <div className="categories-container">
        {CakesData.map((cake) => (
          <div key={cake.id} className="cake-card">
            <img src={cake.image} alt={cake.name} className="cake-image" />
            <div className="cake-info">
              <h2 className="cake-name">{cake.name}</h2>
              <p className="cake-category">{cake.category}</p>
              <Link to={`/cake/${cake.id}`} className="view-details-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
