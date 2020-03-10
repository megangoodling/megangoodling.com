import React, {Component} from 'react'
import axios from 'axios'

import { Input } from 'molecules'
import { ListTodo } from 'molecules'
import './Todo.css'

class Todo extends Component {

  state = {
    todos: []
  }

  componentDidMount (){
    this.getTodos()
  }

  getTodos = () => {
    axios.get('/api/todos')
      .then(res => {
        if(res.data){
          this.setState({
            todos: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteTodo = (id) => {

    axios.delete(`/api/todos/${id}`)
      .then(res => {
        if(res.data){
          this.getTodos()
        }
      })
      .catch(err => console.log(err))
  }

  render () {
    let { todos } = this.state

    return(
      <div className='todo'>
        <h1>My Todo(s)</h1>
        <Input getTodos={this.getTodos}/>
        <ListTodo todos={todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}

export default Todo