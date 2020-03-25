import React from 'react'
import './UnicornAvatar.css'

const UnicornAvatar = (props) => {
  //const unicornPic = require('assets/avatars/cupcake.jpg')
  
  const unicornPic = require('assets/avatars/'+ props.avatar + '.jpg')
  
  return (
      <div>
        <img src={unicornPic} alt='UnicornAvatar' className='UnicornAvatar'/>
        <p>Food Level: {props.foodLevel}</p>
      </div>
  )
}

export default UnicornAvatar

