import React, { useEffect, useState } from 'react'
import { Link } from 'atoms'
import './Sidepanel.css'

const Sidepanel = (props) => {
  const [panelClass, setPanelClass] = useState('panel')
  const [isOpen, setIsOpen] = useState(props.isOpen)

  useEffect(() => {
    setIsOpen(props.isOpen)
  }, [props.isOpen])

  useEffect(() => {
    if (props.isOpen) {
      setPanelClass('panel open')
    } else {
      setPanelClass('panel')
    }
  }, [props.isOpen])

  const menuClickHandler = () => {
    props.backdropClickHandler(!isOpen)
    setIsOpen(!isOpen)
  }

  return (
    <div className={panelClass} onClick={() => menuClickHandler()}>
      <Link className='firstLink' to='/'>Home</Link>
      <Link to='/about'>About Me</Link>
      <Link to='/myfavoritethings'>My Favorite Things</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/unicorns'>Unicorns</Link>
      <Link to='/resume'>Resume</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Sidepanel
