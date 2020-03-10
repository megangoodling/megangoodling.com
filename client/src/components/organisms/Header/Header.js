import React, { useState, useEffect } from 'react'
import { DesktopNavBar, MobileNavBar, Sidepanel, Backdrop } from 'molecules'
import './Header.css'

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 980)
      setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  const backdropClickHandler = (updateIsOpen) => {
    setIsOpen(updateIsOpen)
  }

  const createMobileNav = () => (
      <div>
        <MobileNavBar parentCallback={() => setIsOpen(!isOpen)}/>
        <Sidepanel isOpen={isOpen} backdropClickHandler={backdropClickHandler} />
        <Backdrop alt='Backdrop' isOpen={isOpen} backdropClickHandler={backdropClickHandler} />
      </div>
    )

  return (
    <div>
      { isMobile ? createMobileNav() : <DesktopNavBar /> }
    </div>
  )
}

export default Header
