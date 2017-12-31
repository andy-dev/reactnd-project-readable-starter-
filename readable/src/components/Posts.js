import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <section>
        {posts.map(post => <Post key={post.id} {...post} />)}
      </section>
    );
  }
}

export default Posts;


