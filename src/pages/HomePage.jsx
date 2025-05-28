import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Achivements from '../components/Achivements';
import Certificates from '../components/Certificates';
import GoToTopButton from '../components/GoToTopButton';
import AdminLogin from '../components/Admin/AdminLogin';
import Dashboard from '../components/Admin/Dashboard';

function HomePage() {
  return (
    <div>
      <div >
    <Navbar />
    <div className='h-screen' id='section1'>
    <Home />
    </div>
    <div id='section2'>
    <About />
    </div>
    <div id='section3'>
    <Projects />
    </div>
    <div id='section4'>
    <Achivements /></div>
    <div id='section5'>
    <Certificates /></div>
    <div id='section6'>
    <Contact /></div> 
    {/* will continue later */}
     <Footer />
    <GoToTopButton /> 
     {/* <AdminLogin />
    <Dashboard />  */}

   </div>
    </div>
  )
}

export default HomePage
