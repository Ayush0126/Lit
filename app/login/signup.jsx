import React, { useState } from 'react';
import { saveSignupData } from './data'; 

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
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={styles.input} />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={styles.input} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={styles.input} />
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

const styles = {
  container: { width: '350px', margin: '100px auto', padding: '30px', backgroundColor: '#f9f9f9', textAlign: 'center' },
  title: { marginBottom: '20px' },
  form: { display: 'flex', flexDirection: 'column' },
  input: { padding: '10px', marginBottom: '15px' },
  button: { padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none' },
};

export default SignupPage;
