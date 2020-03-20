import React, {Component} from 'react'
import axios from 'axios'
import { UnicornInput } from 'molecules'
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
        <ul>
        {
          unicorns &&
          unicorns.length > 0 ?
              (
                unicorns.map(unicorn => (
                <li key={unicorn._id} onClick={() => this.deleteUnicorn(unicorn._id)}>
                  {unicorn.name}
                  <p >{unicorn.color}</p>
                  </li>
                  ))
              )
              :
              (
                <li>No unicorn(s) left</li>
              )
        }
        </ul>
      </div>
    )
  }
}

export default UnicornList