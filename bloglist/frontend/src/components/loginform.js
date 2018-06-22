import React from 'react';
import { func } from 'prop-types';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  onFieldChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.onSubmit({ username, password });
    this.setState({
      username: '',
      password: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        Login
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onFieldChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onFieldChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

LoginForm.propTypes = { onSubmit: func.isRequired };

export default LoginForm;
