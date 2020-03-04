import React from 'react'
import { Button } from 'atoms'
import { Link } from 'react-router-dom'
import './MyFavoriteThings.css'
import '../PageLayout.css'

export class MyFavoriteThings extends React.Component {
  render () {
    return (
      <div className='Page'>
        <div className='Header'>
          <h1>These are a few of my favorite things.</h1>
        </div>
        <div className='Content Row'>
            <Link to='/myfavoritethings/concerts'>
              <Button name='CONCERTS' />
            </Link>
            <Link to='/myfavoritethings/food'>
              <Button name='FOOD' />
            </Link>
            <Link to='/myfavoritethings/travel'>
              <Button name='TRAVEL' />
            </Link>
        </div>
      </div>
    )
  }
}
export default MyFavoriteThings