import React from 'react'
import { Button } from 'atoms'
import { Link } from 'react-router-dom'
import './Projects.css'
import '../PageLayout.css'

export class Projects extends React.Component {
  render () {
    return (
      <div className='Page'>
        <div className='Header'>
          <h1>I like to make things.</h1>
        </div>
        <div className='Content'>
          <div className='Row'>
            <Link to='/projects/raspberrypi'>
              <Button name='RaspberryPi Magic Mirror' />
            </Link>
            <Link to='/projects/begoodjewelry'>
              <Button name='Be Good Jewelry' />
            </Link>
            <Link to='/projects/thiswebsite'>
              <Button name='This website' />
            </Link>
          </div>
          <div className='Row'>
            <Link to='/projects/twu'>
              <Button name='TWU' />
            </Link>
            <Link to='/projects/nlpcolumbia'>
              <Button name='NLP Lab at Columbia University' />
            </Link>
            <Link to='/projects/afatherslullaby'>
              <Button name='A Father&#39;s Lullaby' />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Projects