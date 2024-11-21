import React, { useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import { login } from '../API Service/AuthService';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    try {
      //const data = await login(email, password);
      
      // Store token and redirect to the flights page after login
      localStorage.setItem('token', 'token');
      navigate('/flights');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <AuthForm
        title="Login to Flight Buddy"
        buttonLabel="Login"
        linkText="New to Flight Buddy?"
        linkPath="/signup"
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
        ]}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
