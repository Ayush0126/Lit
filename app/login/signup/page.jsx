'use client';
import React, { useState } from 'react';
import { saveSignupData } from '../signup/data'; // adjust path if needed
import './signup.css'; // ✅ import the CSS file

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveSignupData(formData); 
    alert('Signup data saved!');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="signup-input" />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="signup-input" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="signup-input" />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
