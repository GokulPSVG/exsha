import React from 'react'
import { useParams } from 'react-router-dom'
import TrendingList from './TrendingList'
import PostPage from './PostPage';

const ShowPost = ({setposts,posts,menuBar,allComments,setallComments}) => {
    const id=useParams()
    const Id= Number(id.id)  
    
  return (
    <div className='showPost'>
        <PostPage 
          menuBar={menuBar}
          setposts={setposts}
          Id={Id}
          posts={posts}
          allComments={allComments}
          setallComments={setallComments}
        />
        <div className='trendingSideList'>
            {posts.map((post) => (
                <TrendingList 
                  post={post}
                  key={post.id}
                />
            ))}
        </div>
    </div>
  )
}

export default ShowPost