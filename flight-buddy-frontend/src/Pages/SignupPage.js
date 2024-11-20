import React, { useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import { signup } from '../API Service/AuthService';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Check if the user is already logged in and redirect if so
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/flights');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const data = await signup(email, password);
      
      // Save the token and redirect to the flights page after successful signup
      localStorage.setItem('token', data.token);
      navigate('/flights');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <AuthForm
        title="Sign Up for Flight Buddy"
        buttonLabel="Sign Up"
        linkText="Already a user?"
        linkPath="/login"
        onSubmit={handleSubmit}
        fields={[
          {
            label: 'Email',
            type: 'email',
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
          },
          {
            label: 'Password',
            type: 'password',
            value: password,
            onChange: (e) => setPassword(e.target.value),
            required: true,
          },
          {
            label: 'Confirm Password',
            type: 'password',
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            required: true,
          },
        ]}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignupPage;
