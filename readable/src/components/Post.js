import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './Item.css';

class Post extends Component {
  render() {
    const { body } = this.props;
    return (
      <article className="Post">
        <label>
          <input type="checkbox" />
          {body}
        </label>
      </article>
    );
  }
}

// Post.propTypes = {
//   packed: PropTypes.bool,
//   id: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onCheckOff: PropTypes.func.isRequired,
//   onRemove: PropTypes.func.isRequired,
// };
//
// Post.defaultProps = {
//   packed: false,
// };

export default Post;
