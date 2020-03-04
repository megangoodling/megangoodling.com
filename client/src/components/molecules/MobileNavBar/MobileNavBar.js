import React from 'react'
import { Link } from 'atoms'
import logo from 'assets/MG-logo.png'
import menuBars from 'assets/menu-bars.svg' 
import './MobileNavBar.css'

const MobileNavaBar = (props) => {
  return (
    <div className='MobileNavBar'>
          <Link to='/'>
            <img 
              className='MG-logo'
              src={logo} 
              alt='MG'
            />
          </Link>
          <img
            className='hamburger-menu'
            src={menuBars}
            alt='Menu'
            onClick={props.parentCallback}
          />
        </div>
  )
}

export default MobileNavaBar
