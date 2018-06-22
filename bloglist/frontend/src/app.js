import React from 'react';
import Blog from './components/blog';
import blogService from './services/blogs';
import loginService from './services/login';
import LoginForm from './components/loginform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      user: null
    };
  }

  componentWillMount() {
    blogService.getAll().then(blogs => this.setState({ blogs }));
    const user = window.localStorage.getItem('used');

    if (user) {
      const parsedUser = JSON.parse(user);
      this.setState({ user: parsedUser });
      blogService.setToken(user.token);
    }
  }

  login = async credentials => {
    try {
      const user = await loginService.login(credentials);
      window.localStorage.setItem('user', JSON.stringify(user));
      blogService.setToken(user.token);
      this.setState({ user });
    } catch (exception) {
      this.setState({
        error: 'Invalid login credentials'
      });
      setTimeout(() => {
        this.setState({ error: null });
      }, 5000);
    }
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        {user ? user.username : <LoginForm onSubmit={this.login} />}
        <h2>blogs</h2>
        {this.state.blogs.map(blog => <Blog key={blog._id} blog={blog} />)}
      </div>
    );
  }
}

export default App;
