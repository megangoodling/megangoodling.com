import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Todo from './components/Todo';
import Home from './pages/Home/Home'
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/todo' component={Todo} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;