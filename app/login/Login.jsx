import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="branding">
          <div className="image"></div>
          <h1 className="logo">LIT</h1>
          <p className="effort">Effortlessly monitor tax litigation with our automated notice tracker</p>
        </div>
      </div>

      <div className="right-panel">
        <h2 className="welcome">Welcome</h2>

        <div><label style={{ color: "red" }}>*</label><label>Email Address</label></div>
        <input className="email" type="email" placeholder="user@email.com" required />

        <div><label style={{ color: "red" }}>*</label><label>Password</label></div>
        <div className="password-box">
          <input className="password" type="password" placeholder="••••••••"required />
        </div>

        <div className="option">
         <input type="checkbox" /> Remember me<br />
         <input type="checkbox" /> I agree to the{" "}
         <Link to="/term_condition" style={{ color: "blue", textDecoration: "underline" }}>
              Terms & Conditions
         </Link>{" "}and{" "}
         <Link to="/privacy" style={{ color: "blue", textDecoration: "underline" }}>
              Privacy Policy
         </Link>
        </div>

        
        <Link to="/">
        <button className="login-btn" type="submit">Login</button>
        </Link>
        <p className="or">Or</p>

        
        <Link to="/signup">
          <button className="signup-btn" type="button">Sign Up For A New Account</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
