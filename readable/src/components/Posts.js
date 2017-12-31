import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <section className="Items">
        {posts.map(post => <Post key={post.id} {...post} />)}
      </section>
    );
  }
}

export default Posts;

// const mapStateToProps = ({ posts }) => {
//   // return { items: items.filter(item => !item.packed && item.value.includes(filter.unpackedItemsFilter)) };
//   return { posts: posts };
// };
//
// const mapDispatchToProps = dispatch => ({
//   // onCheckOff(item) {
//   //   dispatch(toggleItem(item));
//   // },
//   // onRemove(item) {
//   //   dispatch(removeItem(item));
//   // },
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Posts);
