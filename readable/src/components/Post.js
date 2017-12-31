import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './Item.css';
import 'bootstrap/dist/css/bootstrap.css';

class Post extends Component {
  render() {
    const { body } = this.props;
    return (
      <div>
        <article className="Post">
          <label>
            <input type="checkbox" />
            {body}
          </label>
        </article>

        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="row align-items-center">
                <div className="col-md-12">vote up and vote down</div>
              </div>
            </div>
            <div className="col-md-8">
              <p>blog content</p>
              <p>blog content</p>
              <p>blog content</p>
            </div>
          </div>
        </div>
      </div>
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
