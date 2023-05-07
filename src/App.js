import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Pages/Products';
import Product from './Components/Pages/Product';
import Login from './Components/Pages/Login';
import Admin from './Components/Pages/Admin';
import Register from './Components/Pages/Register';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    // If login is successful, set the isLoggedIn state to true
    setLoggedIn(true);

    // Set showNavbar to false to hide the Navbar component
    setShowNavbar(false);
  };

  return (
    <>
      <Router>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          {isLoggedIn && <Route path="/admin" element={<Admin />} />}
        </Routes>
      </Router>
    </>
  );
}

export default App;
