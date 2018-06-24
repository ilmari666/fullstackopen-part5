import React from 'react';
import Toggleable from './toggleable';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: props.likes };
  }

  toggleContent = e => {
    e.preventDefault();
    this.content.toggle();
  };

  onLiked = e => {
    e.preventDefault();
    this.props.onLiked(this.props.id);
    this.setState({ likes: this.state.likes + 1 });
  };

  render() {
    const { title, author, url, likes, id, user } = this.props;
    const username = user ? user.username : '';
    return (
      <div>
        <div onClick={this.toggleContent}>
          {title} {author}
        </div>
        <Toggleable ref={ref => (this.content = ref)}>
          <React.Fragment>
            <a href={url}>{url}</a>
            added by {username}
            {this.state.likes} likes{' '}
            <button onClick={this.onLiked}>Like</button>
          </React.Fragment>
        </Toggleable>
      </div>
    );
  }
}

export default Blog;
