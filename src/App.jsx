import React from 'react'

import Nav from './components/Nav.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Myworks from './pages/Myworks.jsx'
import Resume from './pages/Resume.jsx'

export default function App() {


  return (
    <>
      <Nav/>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/myworks" element={<Myworks />} />
      <Route path="/resume" element={<Resume />} />
      
      


      </Routes>



    </>
  )
}
