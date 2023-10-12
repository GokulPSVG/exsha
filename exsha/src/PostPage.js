import React, { useRef, useState } from 'react'
import SideBar from './SideBar'
import { AiOutlineLike,AiOutlineShareAlt } from "react-icons/ai";
import { LuSendHorizonal } from "react-icons/lu";
import CommentPage from './CommentPage';

const PostPage = ({menuBar,posts,setposts,Id,allComments,setallComments}) => {
    
    const buttonFocus=useRef() 
    const [likeToggleVariable,setlikeToggleVariable]=useState(true)
    const [shareVariable,setshareVariable]=useState(false)
    const [comment,setcomment]=useState(' ')

    const filteredPost = posts.filter((post)=>(
        Id === post.id
    ))
    const requiredComment = allComments.filter((commentSet)=>(
      commentSet.id === Id
    ))
    const [postComments,setpostComments] = useState(requiredComment[0].comments)

    const toggleLike=()=>{
      if (likeToggleVariable) {
         const likeChange = posts.map((post)=>(
            Id === post.id ? {...post,likeCount:post.likeCount+1} : post
          ))
          setposts(likeChange)
          setlikeToggleVariable(false)
      } else {
        const likeChange = posts.map((post)=>(
            Id === post.id ? {...post,likeCount:post.likeCount-1} : post
          ))
          setposts(likeChange)
          setlikeToggleVariable(true)
      }
    }
    const handleShare=()=>{
            const shareChange = posts.map((post)=>(
                Id === post.id ? {...post,shareCount:post.shareCount+1} : post
            ))
            setposts(shareChange)
            setshareVariable(true)
    }
    const handleComment=(e)=>{
        e.preventDefault()
        const id1= postComments.length ? postComments[postComments.length-1].id+1 : 1
        const tempComments={id:id1,commentContent:comment}
        const tempComments2=[...postComments,tempComments]
        setpostComments(tempComments2)
        const finalArray=allComments.map((reqCommentSet)=>(
          reqCommentSet.id === Id ? {...reqCommentSet,comments:postComments} : reqCommentSet
        ))
        setallComments(finalArray)
        
    }
    
  return (
    <div>
        {menuBar && <SideBar />}
        <div className='showPostContent'>
            <div className='postTop'>
                <h1>{filteredPost[0].title}</h1>
                <div className='likeSpace'>
                      <input ref={buttonFocus} style={{width:'0.1rem',position:'fixed',left:'100000px'}}></input>
                      <button className={`likeIcon ${!likeToggleVariable? 'liked':''}`} onClick={()=>{toggleLike();buttonFocus.current.focus()}}><AiOutlineLike /></button>
                      <p>{filteredPost[0].likeCount}</p>
                      <button className={`shareIcon ${shareVariable? 'shared':''}`} onClick={()=>{handleShare();buttonFocus.current.focus()}}><AiOutlineShareAlt /></button>
                      <p>{filteredPost[0].shareCount}</p>
                </div>
            </div>
            <div className='postBody'>
                <p>{filteredPost[0].content}</p>
            </div>
            <div className='commentSession'>
                  <h1>Comments</h1>
                  <form className='commentForm' onSubmit={(e)=>handleComment(e)}>
                      <label htmlFor='comment'>Enter your comment:</label>
                      <input 
                        id='comment'
                        ref={buttonFocus}
                        value={comment}
                        onChange={(e)=>{setcomment(e.target.value)}}
                      ></input>
                      <button className='commentButton' type='submit' onClick={()=>{buttonFocus.current.focus()}}><LuSendHorizonal /></button>
                  </form>
                  
                <CommentPage 
                    allComments={allComments}
                    Id={Id}
                />
            </div>
        </div>
    </div>
  )
}

export default PostPage