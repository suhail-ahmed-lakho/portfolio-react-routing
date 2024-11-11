import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import Footer from './components/Footer';
import './App.css'
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Box sx={{ 
        flex: '1 0 auto',
        paddingTop: '0px'  // Remove padding top
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
