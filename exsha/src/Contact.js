import React from 'react'
import SideBar from './SideBar'

const Contact = ({menuBar}) => {
  return (        
    <div>
        <span className='ContactPage'>
            {menuBar && <SideBar />}
            <div className='contactContent'>
                <h1>CONTACT DETAILS:</h1>
                <p><span style={{fontWeight:'bold',marginLeft:'4rem'}}>E-mail</span>: contactexsha@gmail.com</p>
            </div>
        </span>
    </div>
  )
}

export default Contact