import React from 'react'
import SideBar from './SideBar'

const About = ({menuBar}) => {
  
  return (
    <div>
        <span className='aboutPage'>
            {menuBar && <SideBar />}
            <div className='aboutContent'>
                <h1>ABOUT US:</h1>
                <p>This site is created by 'JUNIOR Developers' which is an web developing company established in 2023.</p>
            </div>
        </span>
    </div>
  )
}

export default About