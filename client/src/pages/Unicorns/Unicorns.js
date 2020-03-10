import React from 'react'
import './Unicorns.css'
import '../PageLayout.css'

export class Unicorns extends React.Component {
  render () {
    return (
      <div className='Page'>
        <div className='Header'>
          <h1>Unicorns!</h1>
        </div>
        <div className='Content'>
          <p>Make your own unicorn</p>
          <p>It&apos;s so fun</p>
        </div>
      </div>
    )
  }
}

export default Unicorns
