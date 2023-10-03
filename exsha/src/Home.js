import React from 'react'
import Header from './Header'
import Main from './Main'


const Home = ({posts,menuBar,handelMenu}) => {
  return (
    <div>
        <Header 
          handelMenu={handelMenu}
        />
        <Main 
          posts={posts}
          menuBar={menuBar}
        />
    </div>
  )
}

export default Home