import React from 'react'
import '../PageLayout.css'
import './Resume.css'

export class Resume extends React.Component {
  render () {
    return (
      <div className='Page'>
        <div className='Header'>
          <h1>Sincerely, Megan.</h1>
        </div>
        <div className='Content'>
          <div className='ResumeElement'>
            <h3 className='ResumeElementHeader'>TECHNOLOGIES AND SKILLS</h3>
            <div className='ResumeElementList'>
              <h4>React</h4>
              <h4>Python</h4>
              <h4>Agile Software Development</h4>
              <h4>Digital Transformation Consulting</h4>
            </div>
          </div>

          <div className='ResumeElement'>
            <h3 className='ResumeElementHeader'>WORK EXPERIENCE</h3>
            <div className='ResumeElementList'>
              <h4>Software Developer Consultant @ ThoughtWorks, Inc</h4>
            </div>
          </div>

          <div className='ResumeElement'>
            <h3 className='ResumeElementHeader'>EDUCATION</h3>
            <div className='ResumeElementList'>
              <h4>Davidson College, Class of 2019</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Resume