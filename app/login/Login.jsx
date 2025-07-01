'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./Login.css"; // ✅ import the CSS file
import "./"

const LoginPage = () => {
  const router = useRouter();

  // Login form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Signup popup state
  const [showSignup, setShowSignup] = useState(false);

  // Signup form state
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@example.com' && password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/dashboard'); // ✅ redirect
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignupChange = (e) => {
    setSignupData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here, e.g., API call

    alert(`Signed up:\nName: ${signupData.name}\nEmail: ${signupData.email}`);

    // Optionally clear form & close modal
    setSignupData({ name: '', email: '', password: '' });
    setShowSignup(false);
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="branding">
          <div className="image"></div>
          <h1 className="logo">LIT</h1>
          <p className="effort">
            Effortlessly monitor tax litigation with our automated notice tracker
          </p>
        </div>
      </div>

      <div className="right-panel">
        <h2 className="welcome">Welcome</h2>

        <form onSubmit={handleLogin}>
          <div>
            <label style={{ color: "red" }}>*</label>
            <label>Email Address</label>
          </div>
          <input
            className="email"
            type="email"
            placeholder="user@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <label style={{ color: "red" }}>*</label>
            <label>Password</label>
          </div>
          <div className="password-box">
            <input
              className="password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="option">
            <input type="checkbox" /> Remember me
            <br />
            <input type="checkbox" /> I agree to the{" "}
            <a href="/login/term_condition" style={{ color: "blue", textDecoration: "underline" }}>
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="/login/privacy" style={{ color: "blue", textDecoration: "underline" }}>
              Privacy Policy
            </a>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <p className="or">Or</p>

        {/* Signup button triggers popup */}
        <button
          className="signup-btn"
          type="button"
          onClick={() => setShowSignup(true)}
        >
          Sign Up For A New Account
        </button>

        {/* Signup modal */}
        {showSignup && (
          
  <div style={modalStyles.overlay}>
    <div style={modalStyles.modal}>
      <button
        onClick={() => setShowSignup(false)}
        style={modalStyles.closeButton}
        aria-label="Close signup form"
      >
        &times;
      </button>
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSignupSubmit} className="signup-form">
        <input name="name" placeholder="Name" value={signupData.name} onChange={handleSignupChange} className="signup-input" />
        <input name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} className="signup-input" />
        <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} className="signup-input" />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  </div>


        )}
      </div>
    </div>
  );
};

export default LoginPage;

// Modal inline styles (you can move these to your CSS file if you want)
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', // dark transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // on top of everything
  },
  modal: {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    width: '350px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '0.5rem',
    right: '1rem',
    fontSize: '1.5rem',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
};

