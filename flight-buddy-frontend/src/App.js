import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import React from 'react';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import FlightsPage from './Pages/FlightsPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/flights',
    element: <FlightsPage />,
  },
  {
    path: '/',
    element: <FlightsPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
