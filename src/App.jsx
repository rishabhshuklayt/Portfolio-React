import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Achivements from './components/Achivements';
import Certificates from './components/Certificates';
import GoToTopButton from './components/GoToTopButton';
import AdminLogin from './components/Admin/AdminLogin';
import Dashboard from './components/Admin/Dashboard';
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Admin route */}
        <Route path="/admin" element={<AdminLogin />} />
        
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
