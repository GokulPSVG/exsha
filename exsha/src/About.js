import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

const About = ({handelMenu,menuBar}) => {
  
  return (
    <div>
        <Header 
            handelMenu={handelMenu}
        />
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