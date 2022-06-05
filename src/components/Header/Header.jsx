import React from 'react'
import '../../index.css'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>René</h1>
        <h5>I'm a Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src = {ME} alt="ME" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header