
import React from 'react';
import "./aboutpage.css"

const AboutPage = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        We are a team of passionate individuals who strive to bring the best solutions to our customers.
        Our mission is to provide innovative and user-friendly products that make a difference in people's lives.
      </p>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
          <p>John leads the team with vision and passion. He has over 20 years of experience in the industry.</p>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>CTO</p>
          <p>Jane is the technical brain behind our platform. She is responsible for the architecture and technical strategy.</p>
        </div>
        <div className="team-member">
          <h3>Mike Johnson</h3>
          <p>Product Manager</p>
          <p>Mike works closely with customers to ensure our products meet their needs and exceed expectations.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
