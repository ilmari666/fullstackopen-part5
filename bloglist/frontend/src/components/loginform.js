import React from 'react';
import { func } from 'prop-types';
import Form from './form';

const fields = [
  {
    name: 'username',
    type: 'text'
  },
  {
    name: 'password',
    type: 'password'
  }
];

const LoginForm = props => {
  const { onSubmit } = props;
  return <Form fields={fields} onSubmit={onSubmit} buttonLabel="login" />;
};

LoginForm.propTypes = { onSubmit: func.isRequired };

export default LoginForm;
