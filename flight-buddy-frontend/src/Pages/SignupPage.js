import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { signup } from '../API Service/AuthService';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const data = await signup(email, password);
      
      localStorage.setItem('token', data.token);
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
