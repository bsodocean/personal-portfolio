import React from 'react'
import './experience.css'
import html250 from '../../assets/icons/html250.svg'
import css250 from '../../assets/icons/css250.svg'
import sass250 from '../../assets/icons/sass250.svg'
import javascript250 from '../../assets/icons/javascript250.svg'
import react256 from '../../assets/icons/react256.svg'

const Experience = () => {
  return (
    <section id = "experience">
      <h5>Workspace</h5>
      <h2>I Work With</h2>
      <div className="experience_container">
        <div className="experience_sub_container">
          <img src = {html250} alt = "" class = "sub_icons" />
          <p>HTML</p>
        </div>

        <div className="experience_sub_container">
          <img src = {css250} alt = "" class = "sub_icons" />
          <p>CSS</p>
        </div>
        
        <div className="experience_sub_container">
          <img src = {javascript250} alt = "" class = "sub_icons" />
          <p>JAVASCRIPT</p>
        </div>

        <div className="experience_sub_container">
          <img src = {sass250} alt = "" class = "sub_icons" />
          <p>SASS</p>
        </div>


        <div className="experience_sub_container">
          <img src = {react256} class = "sub_icons" />
          <p>REACT</p>
        </div>

      </div>
    </section>
  )
}

export default Experience