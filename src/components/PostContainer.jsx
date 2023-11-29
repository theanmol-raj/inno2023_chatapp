import React from 'react'
import Post from './Post'

function PostContainer() {
  //  functionality to get all the posts from the database 



  return (
    <div className='  flex-grow max-w-xl w-full px-4 lg:px-12  '>
      
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default PostContainer