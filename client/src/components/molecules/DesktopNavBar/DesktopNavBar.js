import React from 'react'
import { Link } from 'atoms'
import Logo from 'assets/MG-logo.png'
import './DesktopNavBar.css'

const DesktopNavBar = () => {
  return (
    <nav>
      <div className='DesktopNavBar'>
        <Link to='/'><img src={Logo} height={120} alt='mg' /></Link>
        <Link to='/about'><h1 className='DesktopNavBar'>ABOUT ME</h1></Link>
        <Link to='/myfavoritethings'><h1 className='DesktopNavBar'>MY FAV THINGS</h1></Link>
        <Link to='/projects'><h1 className='DesktopNavBar'>PROJECTS</h1></Link>
        <Link to='/unicorns'><h1 className='DesktopNavBar Unicorn'>UNICORNS</h1></Link>
        <Link to='/resume'><h1 className='DesktopNavBar'>RESUME</h1></Link>
        <Link to='/contact'><h1 className='DesktopNavBar'>CONTACT</h1></Link>
      </div>
    </nav>
  )
}

export default DesktopNavBar
