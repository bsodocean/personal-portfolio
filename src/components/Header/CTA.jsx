import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className = 'cta'>
        <a href = {CV} download className = 'btn'>Download CV</a>
        <a href = "#contact" className = 'btn'>Get in Touch</a>
    </div>
  )
}

export default CTA