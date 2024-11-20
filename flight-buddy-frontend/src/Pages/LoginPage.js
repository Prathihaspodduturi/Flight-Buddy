import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { login } from '../API Service/AuthService';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const data = await login(email, password);
      
      localStorage.setItem('token', data.token);
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
