import React from 'react';
import { func } from 'prop-types';
import Form from './form';

const fields = [
  {
    name: 'title',
    type: 'text'
  },
  {
    name: 'author',
    type: 'text'
  },
  {
    name: 'url',
    type: 'text'
  }
];

const BlogForm = props => {
  const { onSubmit } = props;
  return (
    <div>
      <h2>Create new blog</h2>
      <Form fields={fields} onSubmit={onSubmit} buttonLabel="create" />
    </div>
  );
};
BlogForm.propTypes = { onSubmit: func.isRequired };
export default BlogForm;
