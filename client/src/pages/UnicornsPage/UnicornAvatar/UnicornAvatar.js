import React from 'react'
import axios from 'axios'
import './UnicornAvatar.css'

const UnicornAvatar = ({unicorn, deleteUnicorn, getUnicorns}) => {  
  const unicornPic = require('assets/avatars/'+  unicorn.avatar + '.jpg')

  const feedUnicorn = (id) => {
    const task = {name: unicorn.name,
                  avatar: unicorn.avatar,
                  foodLevel: unicorn.foodLevel + 50}

    axios.put(`/api/unicorns/${id}`, task)
      .then(res => {
        if(res.data){
          getUnicorns()
        }
      })
      .catch(err => console.log(err))
  }

  const shootUnicorn = (id) => {
    const task = {name: unicorn.name,
                  avatar: unicorn.avatar,
                  foodLevel: unicorn.foodLevel - 20}

    axios.put(`/api/unicorns/${id}`, task)
      .then(res => {
        if(res.data){
          getUnicorns()
        }
      })
      .catch(err => console.log(err))
  }
  
  return (
      <div>
        <h3 className='UnicornAvatar'>{unicorn.name}</h3>
        <img src={unicornPic} alt='UnicornAvatar' className='UnicornAvatar'/>
        <div>
          <button className='UnicornAvatar' onClick={() => feedUnicorn(unicorn._id)}>Feed me!</button>
          <button className='UnicornAvatar' onClick={() => shootUnicorn(unicorn._id)}>Shoot glitter</button>
          <button className='UnicornAvatar' onClick={() => deleteUnicorn(unicorn._id)}>Delete</button>
        </div>
        <p>Food Level: {unicorn.foodLevel}</p>
      </div>
  )
}

export default UnicornAvatar
