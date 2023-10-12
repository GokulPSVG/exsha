import React from 'react'
import { Link } from 'react-router-dom'


const TrendingList = ({post}) => {
    const body = post.content.length > 20 ? post.content.slice(0,21) : post.content
  return (
    <div className='trendingPostCard'>
        <Link to={`${post.id}`} className='trendingLink'>   
              <p style={{fontWeight:'bold',fontSize:'1.5rem'}}>{post.title}</p>
              <p style={{fontSize:'1rem'}}>{body}...</p>
        </Link>
    </div>
  )
}

export default TrendingList