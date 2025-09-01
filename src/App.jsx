import React from 'react'
import './App.css'
import Home from './pages/home.jsx'
import Navbar from './components/Navbar.jsx'


function App() {

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-center my-8">Welcome to Viharro</h1>
      <Home />
    </>

  )
}

export default App
