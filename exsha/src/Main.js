import React from 'react'
import Feed from './Feed'
import SideBar from './SideBar'
import FunGames from './FunGames'
import GroupList from './GroupList'

const Main = ({posts,menuBar}) => {
   
  return (
    <main>
      {menuBar && <SideBar />}
      <GroupList />
      <div className='postCardStyle'>
        {posts.map((post) => (
            <Feed 
              post={post}
              key={post.id}
            />
        ))}
      </div>
      <FunGames />
    </main>
  )
}

export default Main