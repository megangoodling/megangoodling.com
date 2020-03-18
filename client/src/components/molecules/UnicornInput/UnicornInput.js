import React, { Component } from 'react'
import axios from 'axios'

class UnicornInput extends Component {

  state = {
    name: ''
  }

  addUnicorn = () => {
    const task = {name: this.state.name}

    if(task.name && task.name.length > 0){
      axios.post('/api/unicorns', task)
        .then(res => {
          if(res.data){
            this.props.getUnicorns()
            this.setState({name: ''})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('name field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render () {
    let { name } = this.state
    return (
      <div className='UnicornInput'>
        <input type='text' onChange={this.handleChange} value={name} />
        <button onClick={this.addUnicorn}>add unicorn</button>
      </div>
    )
  }
}

export default UnicornInput