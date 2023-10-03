import React from 'react'

const Feed = ({post}) => {
  const body = post.content.length > 70 ? post.content.slice(0,71) : post.content
  return (
    <div className='postCard'> 
      <p>
          <span style={{fontWeight:'bold',fontSize:'2rem'}}>{post.title}</span><br />
          <span style={{fontSize:'1.2rem'}}>{body}...</span>
      </p>
    </div>
  )
}

export default Feed