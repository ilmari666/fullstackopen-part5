import React from 'react';
import Blog from './components/blog';
import blogService from './services/blogs';
import loginService from './services/login';
import LoginForm from './components/loginform';
import UserInfo from './components/userinfo';

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
    const user = window.localStorage.getItem('user');

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

  logout = () => {
    window.localStorage.removeItem('user');
    blogService.removeToken();
    this.setState({ user: null });
  };

  render() {
    const { user } = this.state;

    if (!user) {
      return <LoginForm onSubmit={this.login} />;
    }

    return (
      <div>
        <UserInfo name={user.username} onLogout={this.logout} />
        <h2>blogs</h2>
        {this.state.blogs.map(blog => <Blog key={blog._id} blog={blog} />)}
      </div>
    );
  }
}

export default App;
