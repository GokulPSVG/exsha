import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sideBar side'>
        <Link to ='/' className='link'>Home</Link>
        <Link to='/about' className='link'>About</Link>
        <Link to='/contact' className='link'>Contact</Link>
    </div>
  )
}

export default SideBar