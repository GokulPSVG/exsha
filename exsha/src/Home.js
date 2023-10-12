import React from 'react'
import Main from './Main'


const Home = ({posts,menuBar}) => {
  return (
    <div>
        <Main 
          posts={posts}
          menuBar={menuBar}
        />
    </div>
  )
}

export default Home