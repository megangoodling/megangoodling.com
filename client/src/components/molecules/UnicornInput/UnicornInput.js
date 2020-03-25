import React, { Component } from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons'
import axios from 'axios'

class UnicornInput extends Component {

  state = {
    name: '',
    avatar: '',
    foodLevel: 0
  }

  addUnicorn = () => {
    const task = {name: this.state.name,
                  avatar: this.state.avatar,
                  foodLevel: this.state.foodLevel}

    if(task.name && task.name.length > 0 && task.avatar && task.avatar.length > 0){
      axios.post('/api/unicorns', task)
        .then(res => {
          if(res.data){
            this.props.getUnicorns()
            this.setState({name: '', avatar: '', foodLevel: 0})
          }
        })
        .catch(err => console.log(err))
    } else {
      if (!task.name){
        console.log('Name field required')
      }
      if (!task.avatar){
        console.log('Avatar field required')
      }
    }
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleAvatarChange = (e) => {
    this.setState({
      avatar: e
    })
  }

  render () {
    let { name } = this.state

    return (
      <div className='UnicornInput'>
        <div>
          <p>Name: </p>
          <input type='text' onChange={ this.handleNameChange } value={name} />
          <p>Avatar: </p>

          <RadioGroup onChange={ this.handleAvatarChange } horizontal >
            <RadioButton value="cupcake" >
              Cupcake
            </RadioButton>
            <RadioButton value="icecream">
              Ice Cream
            </RadioButton>
            <RadioButton value="donut">
              Donut
            </RadioButton>
            <RadioButton value="mermaid">
              Mermaid
            </RadioButton>
            <RadioButton value="rainbow">
              Rainbow
            </RadioButton>
          </RadioGroup>
          
        </div>
        <button onClick={this.addUnicorn}>add unicorn</button>
      </div>
    )
  }
}

export default UnicornInput