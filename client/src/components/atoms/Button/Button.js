import React from 'react'
import './Button.css'

const Button = (props) => <button className='Button' onClick={props.onClick}>{props.name}</button>

export default Button
