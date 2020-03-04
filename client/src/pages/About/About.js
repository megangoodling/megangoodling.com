import React from 'react'
import profile from 'assets/Profile-B&W.jpg'
import './About.css'
import '../PageLayout.css'

export class About extends React.Component {
  render () {
    return (
      <div className='Page'>
        <div className='Header'>
          <h1>Hi, it&apos;s nice to meet you.</h1>
        </div>
        <div className='Content'>
          <div className='Row'>
            <img src={profile} className='ProfilePic' alt='me' />
            <p className='Bio'>Hey there, I&apos;m Megan! I am from Charlotte, NC, and studied at Davidson College, where I played soccer. Currently I live in Chicago and work for ThoughtWorks, Inc., as a software developer consultant. I am 23 years old, love skiing, am pescetarian, read a lot of Kurt Vonnegut, and enjoy conversations with strangers. Welcome to my website -- I hope you learn a bit more about me!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
