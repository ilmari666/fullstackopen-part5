import React from 'react';
import Blog from './blog';

const Blogs = props => {
  const { blogs } = props;
  return (
    <div>
      <h2>Blogs</h2>
      {blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
    </div>
  );
};

export default Blogs;