import React, { Component } from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons'
import axios from 'axios'
import './UnicornInput.css'

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
      <div className='unicornInput'>
        <div>
          <p className='unicornInput'>Name: </p>
          <input type='text' onChange={ this.handleNameChange } value={name} />
          <p className='unicornInput'>Avatar: </p>

          <RadioGroup className='unicornRadio' onChange={ this.handleAvatarChange } horizontal >
            <RadioButton className='unicornButton' value="cupcake" >
              Cupcake
            </RadioButton>
            <RadioButton className='unicornButton' value="icecream">
              Ice Cream
            </RadioButton>
            <RadioButton className='unicornButton' value="donut">
              Donut
            </RadioButton>
            <RadioButton className='unicornButton' value="mermaid">
              Mermaid
            </RadioButton>
            <RadioButton className='unicornButton' value="rainbow">
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