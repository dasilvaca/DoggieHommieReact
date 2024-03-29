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
             photo={post.userData.profile_picture} 
              // photo = {Avatar}
              description={post.description}
              title={post.title}
              username_str={post.userData.user.first_name + " " + post.userData.user.last_name}
              post_config_id = {post.id}
              user_post_id = {post.userData.id}
              upvotes = {post.grade}
              date = {post.date}
              // post_report_id = {post.id}
              key={post.id}
              is_active = {post.userData.user.is_active}
              email={post.userData.user.username}
              tel =  {post.userData.telefono}
              image = {post.images}
              comments = {post.comments}
              state_user = {post.state_user}
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