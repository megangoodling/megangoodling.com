import React, {Component} from 'react'
import axios from 'axios'

import { UnicornInput } from 'molecules'
import { ListUnicorn } from 'molecules'
import './Unicorn.css'

class Unicorn extends Component {

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
          <h2>Name: </h2>
          <UnicornInput getUnicorns={this.getUnicorns}/>
        </div>
        <ListUnicorn unicorns={unicorns} deleteUnicorn={this.deleteUnicorn}/>
      </div>
    )
  }
}

export default Unicorn