import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    // While checking authentication, do not render the content
    return null;
  }

  return (
    <div>
      <h1>Flights Page</h1>
      <p>Welcome to the Flights Page. This is where you will see available flight information and related features.</p>
      <button onClick={() => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        navigate('/login', { replace: true }); // Redirect to the login page after logging out
      }}>
        Logout
      </button>
    </div>
  );
};

export default FlightsPage;
