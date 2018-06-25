import React from 'react';
import styled from 'styled-components';
import Toggleable from './toggleable';

const BlogWrapper = styled.div`
  border-style: solid;
  width: 100%;
`;

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: props.likes };
  }

  toggleContent = e => {
    e ? e.preventDefault() : null;
    this.content.toggle();
  };

  onLiked = e => {
    // this is terrible
    e.preventDefault();
    const likes = this.state.likes;
    const { url, author, user, title, id } = this.props;
    this.props.onLiked({ likes, url, author, user, title, id });
    this.setState({ likes: likes + 1 });
  };

  onDelete = e => {
    e.preventDefault();
    const { author, user, title, id } = this.props;
    this.props.onDelete({ author, user, title, id });
  };
  render() {
    const { title, author, url, user } = this.props;
    const username = user ? user.username : '';
    return (
      <BlogWrapper>
        <div className="blogHeader" onClick={this.toggleContent.bind(this)}>
          {title} {author}
        </div>

        <Toggleable ref={ref => (this.content = ref)}>
          <React.Fragment>
            <div className="blogInfo">
              URL: <a href={url}>{url}</a> <br />
              Created by: {username} <br />
              {this.state.likes} likes
              <button onClick={this.onLiked}>Like</button>
            </div>
            {!user || user.username === props.user.username ? (
              <button onClick={this.onDelete}>Delete</button>
            ) : null}
          </React.Fragment>
        </Toggleable>
      </BlogWrapper>
    );
  }
}

export default Blog;
