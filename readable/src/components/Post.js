import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';

class Post extends Component {
  render() {
    const { body, title, author, id, onRemove, voteScore, post } = this.props;
    return (
      <div className="row p-2 align-items-center">
        <div className="col-md-2 ta-c">
          <div className="row">
            <div className="col cp">
              <FaAngleUp size="50" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              {voteScore}
            </div>
          </div>
          <div className="row">
            <div className="col cp">
              <FaAngleDown size="50" />
            </div>
          </div>
        </div>
        <div className="col-md-10 ">
          <div className="card ">
            <div className="card-body p-3">
              <h5 className="card-title">
                {title}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {author}
              </h6>
              <p className="card-text">
                {body}
              </p>

              <Link className="btn btn-success m-1" to={`/editPost/${id}`}>
                Edit
              </Link>
              <button className="btn btn-success m-1">View</button>
              <button onClick={() => onRemove(id)} className="btn btn-danger m-1">
                Delete
              </button>
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
