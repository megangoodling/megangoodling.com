import React from 'react'
import { NavLink as NavLinkRR } from 'react-router-dom'

export const Link = (props) => (
    <NavLinkRR
      exact
      to={props.to}
      activeClassName='selected'
      className='Link'
    >
      {props.children}
    </NavLinkRR>
  )

export default Link
