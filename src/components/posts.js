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
<<<<<<< HEAD
              post_config_id = {post.id}
=======
              post_report_id = {post.id}
              key={post.id}
>>>>>>> 5a3ce3568f92dc93804b3f915ee3ce3551762280
            />
          ))

        ) : (
          <div className="spinner-border" role="status" style={{margin: "20%"}}>
            <span className="sr-only">Loading...</span>
          </div>
          // TODO: Add a loading animation
        )}
      </div>
    </div>
  )
}

export default Posts