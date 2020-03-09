import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'atoms'
import './Home.css'
import '../PageLayout.css'

export class Home extends React.Component {
  handleClickSayHello () {
    alert('Welcome to my website LOLz')
  }

  render () {
    return (
      <div className='Page'>
        <div className='Header'>
          <h1>My name is Megan Goodling.</h1>
          <h2>I am a &#60; software developer /&#62;.</h2>
        </div>
        <div className='Content'>
          <Link to={'./contact'}>
            <Button name='CLICK ME' onClick={this.handleClickSayHello}/>
          </Link>
        </div>
      </div>
    )
  }
}
export default Home
