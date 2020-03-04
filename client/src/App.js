import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { About, Contact, Home, MyFavoriteThings, Projects, Resume, Unicorns } from 'pages'
import { Footer } from 'molecules'
import { Header } from 'organisms'
import Todo from './components/Todo';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />        

        <Switch>
        <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/myfavoritethings' component={MyFavoriteThings} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/unicorns' component={Unicorns} />

          <Route exact path='/todo' component={Todo} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;