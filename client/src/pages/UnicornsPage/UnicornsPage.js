import React from 'react'
import { Todo } from 'pages'
import Unicorn from './Unicorn' 
import './UnicornsPage.css'
import '../PageLayout.css'

export class UnicornsPage extends React.Component {
  render () {
    return (
      <div className='Page'>
        <div className='Header'>
          <h1>Unicorns!</h1>
          <h2 className='Unicorn'>Scroll down to create a unicorn and feed it glitter :)</h2>
        </div>
        <div className='Content'>
          {/* <Todo /> */}
          <Unicorn />
        </div>
      </div>
    )
  }
}

export default UnicornsPage
