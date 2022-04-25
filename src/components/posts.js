import React from 'react'
import Post from '../components/post';


const Posts = ({posts}) => {
  return (
    <div className="container justify-content-center">
        <div className="row justify-content-center">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post
                photo={post.image}
                description={post.episode}
                title={post.name}
              />
            ))
          ) : (
            <h1>...Loading</h1>
          )}
        </div>
      </div>
  )
}

export default Posts