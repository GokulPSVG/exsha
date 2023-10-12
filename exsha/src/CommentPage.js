import React from 'react'

const CommentPage = ({allComments,Id}) => {
    const requiredComment = allComments.filter((commentSet)=>(
        commentSet.id === Id
    ))
    
  return (
    <div>
        {requiredComment[0].comments.length ? requiredComment[0].comments.map((comment)=>(
                        <>
                          <p>{comment.commentContent}</p>
                        </>
                  )) : <p>No Comments</p>}
    </div>
  )
}

export default CommentPage