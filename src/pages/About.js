import React from 'react';
import './About.css';

function About() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <div className="about">
      <header className="about-header">
        <h1>About Us</h1>
        <div style={{ textAlign: 'center' }}>
          <p className="intro-text">
            Welcome to Flavorscape, where every bite is a burst of flavor and every dish is crafted to perfection. From sizzling appetizers to creamy indulgences, we offer a delightful mix of bold and comforting tastes that will tantalize your taste buds. Whether you're in the mood for a savory snack or a refreshing treat, our menu is designed to bring you the best of both worlds. Come, experience a fusion of fresh ingredients, rich flavors, and an unforgettable dining experience that will keep you coming back for more!
          </p>
        </div>
      </header>

      <section className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" placeholder="Write your message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <footer className="about-footer">
        <div className="socials">
          <a href="https://www.facebook.com/yourbakery" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/yourbakery" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>&copy; 2024 Flavorscape - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
