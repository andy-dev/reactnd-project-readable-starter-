import React, { Component } from 'react';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';

class Comment extends Component {
  render() {
    const { body, author, voteScore, onChangeCommentVote, id } = this.props;
    return (
      <div className="row p-2 align-items-center">
        <div className="col-md-2 offset-md-3 ta-c">
          <div className="row">
            <div className="col cp" onClick={() => onChangeCommentVote(id, { option: 'upVote' })}>
              <FaAngleUp size="20" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              {voteScore}
            </div>
          </div>
          <div className="row">
            <div className="col cp" onClick={() => onChangeCommentVote(id, { option: 'downVote' })}>
              <FaAngleDown size="20" />
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
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
