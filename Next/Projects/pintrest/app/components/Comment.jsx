import React from 'react'

function Comment({username, comment, profileImage}) {
  return (
    <div>
        <span>{username}</span>
        <span>{comment}</span>
    </div>
  )
}

export default Comment