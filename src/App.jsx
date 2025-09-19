import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import SignUp from './pages/signUp';
import Login from './pages/Login';
import About from './pages/About';
import PlaceDetail from './pages/PlaceDetail'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place" element={<PlaceDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
