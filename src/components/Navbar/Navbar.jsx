import React from 'react'
import './navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { GiStack } from 'react-icons/gi'
import { SiAboutdotme } from 'react-icons/si'
import { IoMdContact } from 'react-icons/io'
import { GiBrain } from 'react-icons/gi'
import {useState} from 'react'
import MaterialToolTip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }) => (
  <MaterialToolTip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 15,
    borderRadius: 3,
    textAlign: 'center',
  },
}));

const Navbar = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <LightTooltip title = "Home">
      <a href='#'  onClick = {() => setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''} ><AiOutlineHome/></a>
      </LightTooltip>
      <LightTooltip title = "About Me">
      <a href='#about' onClick = {() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''} ><SiAboutdotme/></a>
      </LightTooltip>
      <LightTooltip title = "Workspace">
      <a href='#experience' onClick = {() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}><GiStack/></a>
      </LightTooltip>
      <LightTooltip title = "Contact">
      <a href='#contact' onClick = {() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''} ><IoMdContact/></a>
      </LightTooltip>
    </nav>
  )
}

export default Navbar