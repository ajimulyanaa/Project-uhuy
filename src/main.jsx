import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterForm from './Pages/registerForm.jsx';
import LoginForm from './Pages/loginForm.jsx';
import ErrorPage from './Pages/errorPage.jsx';
import ProductsList from './Pages/products.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hallo Dek</h1>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: '/Register',
    element: <RegisterForm></RegisterForm>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: '/Login',
    element: <LoginForm></LoginForm>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: '/Product',
    element: <ProductsList></ProductsList>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
