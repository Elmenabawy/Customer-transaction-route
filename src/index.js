import React from 'react';
import { createRoot } from 'react-dom/client'
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';


const container = document.getElementById('root');
const router = createBrowserRouter([
  {path:"" , element:<App/>, children:[
      { path: "", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "Contacts", element: <Contacts /> }
    ]
  },

])
const root = createRoot(container);
root.render(
  <RouterProvider router ={router}/>
)
