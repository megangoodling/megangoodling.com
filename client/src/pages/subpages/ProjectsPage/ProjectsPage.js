import React, { useState } from 'react'
import './ProjectsPage.css'
import '../../PageLayout.css'

const ProjectsPage = (props) => {
  const projectFile = require('assets/project-writeups/' + props.name + '.txt')
  const projectPic = require('assets/project-pics/' + props.name + '.jpg')
  const [projectText, setProjectText] = useState('')

  fetch(projectFile)
    .then((r) => r.text())
    .then(text  => {
      setProjectText(text)
    })
  
  return (
      <div className='Project'>
        <div className='ProjectWriteup'>
          <h2 className='ProjectHeader'>{props.title}</h2>
          <p className='ProjectText'>{projectText}</p>
        </div>
        <img src={projectPic} alt='Project' className='ProjectPic'/>
      </div>
  )
}

export default ProjectsPage

