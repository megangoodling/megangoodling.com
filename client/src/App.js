import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { About, Contact, Home, Projects, Resume, UnicornsPage } from 'pages'
import { Footer } from 'molecules'
import { Header } from 'organisms'
import { ProjectsPage } from './pages/subpages'
import './App.css'

const App = () => (
    <BrowserRouter>
      <div className='App'>
        <Header />        

        <Switch>
        <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/unicorns' component={UnicornsPage} />

          <Route exact path='/projects/raspberrypi' component={() => 
            <ProjectsPage title='Raspberry Pi' name='raspberrypi' pic='MG-logo.png'/>}/>
          <Route exact path='/projects/begoodjewelry' component={() => 
            <ProjectsPage title='Be Good Jewelry' name='begoodjewelry' pic='MG-logo.png'/>}/>
          <Route exact path='/projects/thiswebsite' component={() => 
            <ProjectsPage title='This Website' name='thiswebsite' pic='MG-logo.png'/>}/>
          <Route exact path='/projects/twu' component={() => 
            <ProjectsPage title='ThoughtWorks University' name='twu' pic='MG-logo.png'/>}/>
          <Route exact path='/projects/nlpcolumbia' component={() => 
            <ProjectsPage title='NLP Lab at Columbia' name='nlpcolumbia' pic='MG-logo.png'/>}/>
          <Route exact path='/projects/afatherslullaby' component={() => 
            <ProjectsPage title='A Fathers Lullaby' name='afatherslullaby'/>}/>


        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )

export default App