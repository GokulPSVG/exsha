import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sideBar side'>
        <Link to ='/' className='link'>Home</Link>
        <div className='link group'>
          <h3>My Groups</h3>
          <div className='groupList'>
            <p>Trending India</p>
            <p>Trending India</p>
            <p>Trending India</p>
            <p>Trending India</p>
            <p>Trending India</p>
            <p>Trending India</p>
            <p>Trending India</p>
            <p>Trending India</p>
            <p>Trending India</p>
          </div>
        </div>
        <Link to='/about' className='link'>About</Link>
        <Link to='/contact' className='link'>Contact</Link>
    </div>
  )
}

export default SideBar