import React from 'react'
import Header from './Header'
import Foot from './Foot'
import SideBar from './SideBar'

const About = ({handelMenu,menuBar}) => {
  
  return (
    <div>
        <Header 
            handelMenu={handelMenu}
        />
        <span className='aboutContent'>
            {menuBar && <SideBar />}
            <div className='aboutPage'>
                <h1>ABOUT US:</h1>
                <p>This site is created by 'JUNIOR Developers' which is an web developing company established in 2023.</p>
            </div>
        </span>
        <Foot />
    </div>
  )
}

export default About