import React from 'react'
import { FaBars, FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = ({handelMenu}) => {
  return (
    <div className='Header headerPosition'>
       <div id='icons' className="menuIcon"
       role='button'
       tabIndex='0'
       onClick={(e)=>handelMenu(e)}
       ><FaBars /></div>

       <div className="title">
            <p className='bigTitle'>EXsha</p>
            <p className="smallTitle">Share Your Experience</p>
       </div>

       <form id='searchBar' className="searchIcon">
          <label htmlFor='search'>Search</label>
          <input id='search'
            placeholder='Search Post'
          ></input>
       </form>
         
       <Link to='/newPost' id='icons' className="plusIcon"><FaPlus /></Link>
    </div>
  )
}

export default Header