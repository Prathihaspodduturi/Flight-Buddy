import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />, 
  },
  {
    path: '/signup',
    element: <SignupPage/>,
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
