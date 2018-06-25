import React from 'react';
import Blog from './blog';

const Blogs = props => {
  const { blogs, onLiked, onDelete } = props;
  return (

    <div>
      <h2>Blogs</h2>
      <UserContext.Consumer>
      {loggedInUser => {
        {blogs.map(blog => (
          <Blog
            key={blog.id}
            {...blog}
            onLiked={onLiked}
            onDelete={onDelete}
            user={loggedInUser}
          />
        ))}
      }
    </div>
  );
};

export default Blogs;
