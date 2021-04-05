import React from 'react'
import { ContactForm } from 'molecules'
import './Contact.css'
import '../PageLayout.css'

export class Contact extends React.Component {
  render () {
    return (
      <div className='Page'>
        <div className='Header'>
          <h1>Give me a shout!</h1>
          <h2>I am currently based in Denver, CO.</h2>

        </div>
        <div className='Content'>
          <ContactForm />
        </div>
      </div>
    )
  }
}
export default Contact