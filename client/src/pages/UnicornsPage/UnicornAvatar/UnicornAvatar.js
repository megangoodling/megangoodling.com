import React from 'react'
import './UnicornAvatar.css'

const UnicornAvatar = (props) => {
  const unicornPic = require('assets/avatars/cupcake.jpg')
  //const unicornPic = require('assets/avatars/'+ props.unicorn + '.jpg')
  
  return (
      <div className='UnicornAvatar'>
        <img src={unicornPic} alt='UnicornAvatar' />
      </div>
  )
}

export default UnicornAvatar

