import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import PostContainer from '../containers/PostContainer';

class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.length !== undefined
          ? posts.map(post => <PostContainer key={post.id} post={post} {...post} />)
          : <div>Loading</div>}
      </div>
    );
  }
}

export default withRouter(Posts);
