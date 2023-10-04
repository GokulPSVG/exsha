import React from 'react'

const Posts = ({newTitle,setnewTitle,newContent,setnewContent,handelSubmit,navigate}) => {
  return (
    <div>
        <form action="createPost" className='newPostForm' onSubmit={(e)=>handelSubmit(e)}>
            <div className="postInput">
                  <div className="postInputBox">
                      <label for='title' >Title:</label>
                      <input id='title'
                        placeholder='Enter Title'
                        required
                        value={newTitle}
                        onChange={(e)=>setnewTitle(e.target.value)}
                      ></input>
                  </div>

                  <div className="postInputBox">
                      <label for='bodyText' className='bodyTextLabel'>Post:</label>
                      <textarea id='bodyText' className='messageBox' 
                        placeholder='Enter your text'
                        type="input"
                        required
                        value={newContent}
                        onChange={(e)=>{setnewContent(e.target.value)}}
                      ></textarea>
                  </div>
            </div>

            <div className='newPostButton'>
                <button type='submit' className='postButton'>Submit</button>
                <button className='postButton'
                    onClick={()=>navigate('/')}
                >Cancel</button>
            </div>

        </form> 
    </div>
  )
}

export default Posts