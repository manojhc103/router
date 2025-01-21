import React from 'react'
import "./Home.css"



const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Website</h1>
      <p>
        This is the home page of our amazing website. Explore our features, read our blog, and get in touch!
      </p>
      <div className="features">
        <div className="feature">
          <h3>Feature 1</h3>
          <p>Discover the power of our platform and how it can help you grow.</p>
        </div>
        <div className="feature">
          <h3>Feature 2</h3>
          <p>Learn about the tools we offer to enhance your experience.</p>
        </div>
        <div className="feature">
          <h3>Feature 3</h3>
          <p>Stay connected with us through various communication channels.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
