import React from 'react'
import Post from '../components/post';
import Avatar from '../assets/img/Avatar.jpg';

const Posts = ({ posts }) => {
  return (
    <div className="container justify-content-center">
      <div className="row justify-content-center">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              // photo={post.image}
              photo={Avatar}
              description={post.description}
              title={post.title}
              username_str={post.userData.user.first_name + " " + post.userData.user.last_name}
              post_report_id = {post.id}
            />
          ))

        ) : (
          <div class="spinner-border" role="status" style={{margin: "20%"}}>
            <span class="sr-only">Loading...</span>
          </div>
          // TODO: Add a loading animation
        )}
      </div>
    </div>
  )
}

export default Posts