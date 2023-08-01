import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import About from './About'
import Pricing from './Pricing'
import Map from './Map'
import Ranks from './Ranks'
import Footer from './Footer';
import './styles.css'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/map" element={<Map />} />
          <Route path="/ranks" element={<Ranks />} />
        </Routes>
        <Footer />
      </div>
    </Router>
      
  )
}

export default App
