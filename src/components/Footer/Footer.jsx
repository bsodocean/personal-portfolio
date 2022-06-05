import React from 'react'
import './footer.css'
import { FiFacebook } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
const footer = () => {
  return (
    <section id = "footer">
      <div className="floating_container">
      <ul>
        <li>
          <a href = "https://m.me/toouglyy" target = "_blank">
            <FiFacebook className="footer-icon"/>
            <span>- Facebook</span>
          </a>
        </li>

        <li>
          <a href = "https://www.linkedin.com/in/valentino-ren%C3%A9-scheid-49367a240/" target = "_blank">
            <FiLinkedin className="footer-icon"/>
            <span>- linkedin</span>
          </a>
        </li>

        <li>
          <a href = "https://github.com/bsodocean" target = "_blank">
            <FiGithub className="footer-icon"/>
            <span>- github</span>
          </a>
        </li>

      </ul>

      </div>

    </section>
  )
}

export default footer