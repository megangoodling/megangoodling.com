import React, {Component} from 'react'
import axios from 'axios'
import UnicornInput from '../UnicornInput'
import UnicornAvatar from '../UnicornAvatar'
import './UnicornList.css'

class UnicornList extends Component {

  state = {
    unicorns: []
  }

  componentDidMount (){
    this.getUnicorns()
  }

  getUnicorns = () => {
    axios.get('/api/unicorns')
      .then(res => {
        if(res.data){
          this.setState({
            unicorns: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteUnicorn = (id) => {
    axios.delete(`/api/unicorns/${id}`)
      .then(res => {
        if(res.data){
          this.getUnicorns()
        }
      })
      .catch(err => console.log(err))
  }

  render () {
    let { unicorns } = this.state

    return(
      <div className='unicorn'>
        <h1>My Unicorns</h1>
        <div>
          <h2>Create a Unicorn: </h2>
          <UnicornInput getUnicorns={this.getUnicorns}/>
        </div>
        <ul className='unicornList'>
        {
          unicorns &&
          unicorns.length > 0 ?
              (
                unicorns.reverse().map(unicorn => (
                <li key={unicorn._id} className='unicornList'>
                  <UnicornAvatar unicorn={unicorn} deleteUnicorn={this.deleteUnicorn} getUnicorns={this.getUnicorns}/>
                  </li>
                  ))
              )
              :
              (
                <li>No unicorns left</li>
              )
        }
        </ul>
      </div>
    )
  }
}

export default UnicornList