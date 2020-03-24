import React, { Component } from 'react'
import axios from 'axios'

class UnicornInput extends Component {
  state = {
    name: '',
    color: ''
  }

  addUnicorn = () => {
    const task = {name: this.state.name,
                  color: this.state.color}

    if(task.name && task.name.length > 0 && task.color && task.color.length > 0){
      axios.post('/api/unicorns', task)
        .then(res => {
          if(res.data){
            this.props.getUnicorns()
            this.setState({name: '', color: ''})
          }
        })
        .catch(err => console.log(err))
    }else {
      if (!task.name){
        console.log('name field required')
      }
      if (!task.color){
        console.log('color field required')
      }
    }
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleColorChange = (e) => {
    this.setState({
      color: e.target.value
    })
  }

  render () {
    let { name } = this.state
    let { color } = this.state
    return (
      <div className='UnicornInput'>
        <div>
          <p>Name: </p>
          <input type='text' onChange={this.handleNameChange} value={name} />
          <p>Color: </p>
          <input type='text' onChange={this.handleColorChange} value={color} />
        </div>
        <button onClick={this.addUnicorn}>add unicorn</button>
      </div>
    )
  }
}

export default UnicornInput