import React from 'react'

const ListTodo = ({ todos, deleteTodo }) => (
    <ul>
      {
        todos &&
          todos.length > 0 ?
            (
              todos.map(todo => (
                  <li key={todo._id} onClick={() => deleteTodo(todo._id)}>{todo.action}</li>
                ))
            )
            :
            (
              <li>No todo(s) left</li>
            )
      }
    </ul>
  )

export default ListTodo