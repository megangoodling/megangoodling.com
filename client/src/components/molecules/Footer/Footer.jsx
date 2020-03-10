import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './Footer.css'

const Footer = () => (
  <div className='Footer'>
    <div>
      <SocialIcon url='https://www.instagram.com/megangoodling/' className='SocialIcon' target='_blank' />
      <SocialIcon url='https://www.linkedin.com/in/megan-goodling/' className='SocialIcon' bgColor='#002366' target='_blank' />
      <SocialIcon url='mailto:mgoodling15@gmail.com' className='SocialIcon' bgColor='pink' target='_blank' />
      <SocialIcon url='https://venmo.com/code?user_id=1698737260855296202' network='vevo' className='SocialIcon' target='_blank' />
      <SocialIcon url='https://github.com/megangoodling' className='SocialIcon' bgColor='#b19cd9' target='_blank' />
      <SocialIcon url='https://snapchat.com/add/megangoodling' className='SocialIcon' target='_blank' />
      <SocialIcon url='https://open.spotify.com/user/mgoodling15' className='SocialIcon' target='_blank' />
    </div>
  </div>
)

export default Footer
