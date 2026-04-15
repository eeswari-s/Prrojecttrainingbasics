import React from 'react'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero.jsx";
import Service from './Components/Service';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
        <Service/>
      <Footer/>
    </div>
  )
}

export default App
