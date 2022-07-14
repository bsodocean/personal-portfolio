import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubAlt} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/valentino-ren%C3%A9-scheid-49367a240/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/bsodocean" target="_blank" rel="noreferrer"><FaGithubAlt/></a>
        <a href="https://dribbble.com/" target="_blank" rel="noreferrer"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials