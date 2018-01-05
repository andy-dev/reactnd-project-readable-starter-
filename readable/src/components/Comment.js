import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { body, author } = this.props;
    return (
      <div className="row p-2 align-items-center">
        <div className="col-md-6 offset-md-4">
          <div className="card ">
            <div className="card-body p-3">
              <h6 className="card-subtitle mb-2 text-muted">
                {author}
              </h6>
              <p className="card-text">
                {body}
              </p>
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

export default Comment;
