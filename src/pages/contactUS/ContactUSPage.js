// src/Contact.js
import React, { useState } from 'react';
import "./contactUS.css"

const ContactPage = () => {
  // State to manage form input values
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form field changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission (for now, we'll just log the data)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    // Normally, here you would send the form data to the server or email service
    alert('Your message has been sent!');
    setForm({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, please reach out to us using the form below:</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
