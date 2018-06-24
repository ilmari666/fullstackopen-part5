import React from 'react';
import Blogs from './components/blogs';
import BlogForm from './components/blogform';
import blogService from './services/blogs';
import loginService from './services/login';
import LoginForm from './components/loginform';
import UserInfo from './components/userinfo';
import Notification from './components/notification';
import Toggleable from './components/toggleable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      user: null,
      message: ''
    };
  }

  async componentWillMount() {
    const response = await blogService.getAll();
    if (response.status !== 200) {
      return this.notifyError(response);
    }
    const { data: blogs } = response;
    this.setState({ blogs });
    const user = window.localStorage.getItem('user');

    if (user) {
      const parsedUser = JSON.parse(user);
      this.setState({ user: parsedUser });
      blogService.setToken(parsedUser.token);
    }
  }

  notify(message) {
    clearTimeout(this.notifyTimeout);
    this.setState({ message });
    this.notifyTimeout = setTimeout(() => this.setState({ message: '' }), 3000);
  }
  notifyError(response) {
    if (typeof response === 'string') {
      this.notify({ error: response });
    } else {
      this.notify({ error: response.data.error || response.statusText });
    }
  }

  login = async credentials => {
    const response = await loginService.login(credentials);
    if (response.status !== 200) {
      return this.notifyError(response);
    }
    const { data: user } = response;
    window.localStorage.setItem('user', JSON.stringify(user));
    blogService.setToken(user.token);
    this.setState({ user });
  };

  logout = () => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    window.localStorage.removeItem('user');
    blogService.removeToken();
    this.setState({
      user: null
    });
    this.notify(`Hope to see you soon again, ${user.username}.`);
  };

  newBlog = async blog => {
    if (!(blog.title && blog.url)) {
      return this.notifyError('Please fill blog title and URL');
    }
    const response = await blogService.create(blog);
    if (response.status !== 201) {
      return this.notifyError(response);
    }

    this.notify(`Added "${blog.title}" by ${blog.author} successfully`);
    this.blogForm.hide();

    const newBlog = response.data;
    const updatedBlogs = this.state.blogs.concat(newBlog);
    this.setState({ blogs: updatedBlogs });
  };

  render() {
    const { user, message } = this.state;
    if (!user) {
      return (
        <div>
          <Notification message={message} />
          <LoginForm onSubmit={this.login} />
        </div>
      );
    }

    return (
      <div>
        <Notification message={message} />
        <UserInfo name={user.username} onLogout={this.logout} />
        <Blogs
          blogs={this.state.blogs}
          onLiked={id => console.log('like', id)}
        />
        <Toggleable
          showLabel="New Blog"
          hideLabel="Cancel"
          ref={ref => (this.blogForm = ref)}
          controls
        >
          <BlogForm onSubmit={this.newBlog} />
        </Toggleable>
      </div>
    );
  }
}

export default App;
