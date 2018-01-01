import React, { Component } from 'react';
import PostContainer from '../containers/PostContainer';

class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map(post => <PostContainer key={post.id} {...post} />)}
      </div>
    );
  }
}

export default Posts;
