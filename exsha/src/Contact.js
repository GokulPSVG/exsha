import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

const Contact = ({handelMenu,menuBar}) => {
  return (        
    <div>
        <Header 
            handelMenu={handelMenu}
        />
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