import React from 'react'
import { Link } from 'react-router-dom'

const Feed = ({post}) => {
  const body = post.content.length > 70 ? post.content.slice(0,71) : post.content
  return (
    <div className='postCard'> 
      <Link to={`showpost/${post.id}`} className='postLink'>
          <p>
              <span style={{fontWeight:'bold',fontSize:'2rem'}}>{post.title}</span><br />
              <span style={{fontSize:'1.2rem'}}>{body}...</span>
          </p>
      </Link>
    </div>
  )
}

export default Feed