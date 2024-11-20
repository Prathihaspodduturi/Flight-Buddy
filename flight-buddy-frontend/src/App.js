import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react';
import LoginPage from './Pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />, 
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
