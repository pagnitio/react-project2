import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="form-container">
      <form className="centered-form">
        <h2>Contact Information</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
