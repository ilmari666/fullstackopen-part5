import React from 'react';
import Blog from './blog';

const Blogs = props => {
  const { blogs, onLiked } = props;
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map(blog => <Blog key={blog.id} {...blog} onLiked={onLiked} />)}
    </div>
  );
};

export default Blogs;
