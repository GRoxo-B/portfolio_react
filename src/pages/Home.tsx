import React from 'react';
import '../style/Home.css';

const Home: React.FC = () => {
  return (
    <div className="container mt-5 position-relative">
      <h1 className="display-4">Welcome to Our Website!</h1>
      <p className="lead">This is the home page where you can find the latest updates and news.</p>
      <p>
        Explore our website to learn more about us and what we offer.
      </p>
      <div className="learn-more-button">
        <a href="/about" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  );
};

export default Home;