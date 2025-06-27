'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./Login.css";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (email === 'admin@example.com' && password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/dashboard'); 
    } else {
      alert('Invalid credentials');
    }
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
            <Link href="/login/term_condition">
              <span style={{ color: "blue", textDecoration: "underline" }}>
                Terms & Conditions
              </span>
            </Link>{" "}
            and{" "}
            <Link href="/login/privacy">
              <span style={{ color: "blue", textDecoration: "underline" }}>
                Privacy Policy
              </span>
            </Link>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <p className="or">Or</p>

        <Link href="/login/signup">
          <button className="signup-btn" type="button">
            Sign Up For A New Account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
