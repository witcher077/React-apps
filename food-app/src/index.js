import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider,} from "react-router-dom";

import {createBrowserRouter} from "react-router-dom";

import  Home from "./Pages/Home";
import ProductListing  from "./Pages/ProductListing";
import Resister from "./Pages/Resister";
import Services from './Pages/Services';
import About from './Pages/About';
import Signup from './Models/Signup';
import ProtectedRoute from './Components/ProtectedRoutes';
import Login from './Models/Login';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path: "/signup",
        element:<Signup/>,
      },
      {
        path: "/login",
        element:<Login/>,
      },
      {
        path: "/products",
        element:<ProtectedRoute><ProductListing /></ProtectedRoute> ,
     
      },
      {
        path: "/services",
        element: <ProtectedRoute><Services /></ProtectedRoute>
     
      },
      {
        path: "/about-us",
        element: <ProtectedRoute><About /></ProtectedRoute>,
     
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
