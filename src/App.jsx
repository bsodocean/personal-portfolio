import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const app = () => {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />

    </>
  )
}

export default app