import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../Buttons/LogoutButton';

const FlightsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login', { replace: true });
    } else {
      setIsLoading(false);
    }
  }, [navigate]);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <h1>Flights Page</h1>
      <p>Welcome to the Flights Page. This is where you will see available flight information and related features.</p>
      <LogoutButton />
    </div>
  );
};

export default FlightsPage;
