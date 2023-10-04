import React from 'react'
import { useParams } from 'react-router-dom'

const ShowPost = ({posts}) => {
    const id=useParams()
    const Id= Number(id.id)
    const requiredPost= posts.filter((post)=>(
        Id === post.id 
    ))    
    
  return (
    <div>
        <div className='showPostContent'>
            <h1>{requiredPost[0].title}</h1>
            <p>{requiredPost[0].content}</p>
        </div>
    </div>
  )
}

export default ShowPost