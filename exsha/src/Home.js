import React from 'react'
import Main from './Main'


const Home = ({posts,menuBar,handelMenu}) => {
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