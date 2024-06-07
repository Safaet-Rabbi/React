import React, { useState } from 'react';
import './formInput.css';

const FormInput = () => {
  const [formData, setFormData] = useState({
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: ''
  });

  const [focused, setFocused] = useState({
    email: false,
    dateOfBirth: false,
    password: false,
    confirmPassword: false
  });

  const [errors, setErrors] = useState({
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setFocused({ ...focused, [name]: true });
  };

  const validateField = (name, value) => {
    let error = '';
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        error = 'Email is required';
      } else if (!emailRegex.test(value)) {
        error = 'Invalid email address';
      }
    } else if (name === 'dateOfBirth') {
      if (!value) {
        error = 'Date of Birth is required';
      }
    } else if (name === 'password') {
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 6) {
        error = 'Password must be at least 6 characters';
      }
    } else if (name === 'confirmPassword') {
      if (!value) {
        error = 'Confirm Password is required';
      } else if (value !== formData.password) {
        error = 'Passwords do not match';
      }
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email && !errors.dateOfBirth && !errors.password && !errors.confirmPassword) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fix the errors before submitting.');
    }
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="formInput">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={handleFocus}
            focused={focused.email.toString()}
            required
          />
          <span>{errors.email}</span>
        </div>
        <div className="formInput">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            onFocus={handleFocus}
            focused={focused.dateOfBirth.toString()}
            required
          />
          <span>{errors.dateOfBirth}</span>
        </div>
        <div className="formInput">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            onFocus={handleFocus}
            focused={focused.password.toString()}
            required
          />
          <span>{errors.password}</span>
        </div>
        <div className="formInput">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            onFocus={handleFocus}
            focused={focused.confirmPassword.toString()}
            required
          />
          <span>{errors.confirmPassword}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormInput;
