import React from 'react'
import Post from '../components/post';


const Posts = ({posts}) => {
  return (
    <div className="container justify-content-center">
        <div class="row justify-content-center">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post
                photo={post.image}
                description={post.location.name}
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