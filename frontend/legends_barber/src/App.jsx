import { useState } from 'react'
//import Navbar from './home/navbar';
import Hero from './home/Hero';
import Index from './home/Index';
import Services from './home/Services';
import About from './home/About';
import Gallery from './home/Gallery';
//import Feedback from './home/Feedback';
import Footer from './home/Footer';
import Follow from './home/Follow';
import Header from './home/Header';
import './App.css'

function App() {

  return (
    <>
    <Header/>
    {/* <Navbar/> */}
    <Hero/> 
    <About/>  
    <Services/>
    <Index/>
    <Gallery/>
    
    {/* <Feedback/> */}
    <Follow/> 
    <Footer/>
    </>
  )
}

export default App;
