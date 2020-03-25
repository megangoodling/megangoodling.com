import React from 'react'
import './UnicornAvatar.css'

const UnicornAvatar = (props) => {  
  const unicornPic = require('assets/avatars/'+ props.unicorn.avatar + '.jpg')
  
  return (
      <div>
        <h3 className='UnicornAvatar'>{props.unicorn.name}</h3>
        <img src={unicornPic} alt='UnicornAvatar' className='UnicornAvatar'/>
        <div>
          <button className='UnicornAvatar'>Feed me!</button>
          <button className='UnicornAvatar'>Jump over rainbow</button>
        </div>
        <p>Food Level: {props.unicorn.foodLevel}</p>
      </div>
  )
}

export default UnicornAvatar

