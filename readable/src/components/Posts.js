import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="">
        {posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    );
  }
}

export default Posts;
