import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com'
import '../../../styles/bootstrap/css/bootstrap.css'
import './ContactForm.css'

const ContactForm = () => {
  const [sent, setSent] = useState(false)

  const USER_ID = 'user_3huzM3D68nUABB64WsnK5'
  const TEMPLATE_ID = 'contact_megan'
  const SERVICE_ID = 'gmail'

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          console.log(result.text)
          setSent(true)
      }, (error) => {
          console.log(error.text)
      });
  }

  const form = (
    <form className='contact-form' onSubmit={sendEmail}>
      <Form.Group controlId='formBasicName'>
        <Form.Label>What's your name?</Form.Label>
        <Form.Control type='name' placeholder='Name' name='user_name'/>
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>What's your email address?</Form.Label>
        <Form.Control type='email' placeholder='Enter email' name='user_email'/>
        <Form.Text className='text-muted'>
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId='exampleForm.ControlTextarea1'>
        <Form.Label>Message to Megan:</Form.Label>
        <Form.Control as='textarea' rows='3'  name='message' placeholder='What&apos;s good?'/>
    </Form.Group>
      <Button variant='primary' type='submit' className='SubmitButton'>
        Send Email
      </Button>
    </form>
  )

  const emailSent = (
     <p>Email sent!</p>
  )

  return (
      <div> 
        { sent === false ? form : emailSent }
      </div>
  )
}

export default ContactForm
