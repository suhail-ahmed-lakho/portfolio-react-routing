import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import DrawerAppBar from './components/Header.jsx'; // Added .jsx extension


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DrawerAppBar /> {/* Render the DrawerAppBar here */}
    <App /> {/* Then render the main content with routing */}
  </BrowserRouter>
);
