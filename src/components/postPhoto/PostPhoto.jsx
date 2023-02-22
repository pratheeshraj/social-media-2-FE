import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import classes from './postPhoto.module.css'

const PostPhoto = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false)
  const API="https://socailmedia-new-be.onrender.com"
console.log(post.photo);
  return (
    <Link
     className={classes.post}
     onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}
     to={`/postDetails/${post._id}`}
    >
      <img src={`${API}/images/${post.photo}`}/>
      {isHovered && <div className={classes.likes}>{post?.likes?.length} likes</div>}
    </Link>
  )
}

export default PostPhoto