import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';

class Post extends Component {
  render() {
    const {
      body,
      title,
      author,
      id,
      onRemove,
      voteScore,
      onChangeVote,
      timestamp,
      commentCount,
      category
    } = this.props;
    const date = new Date(timestamp);
    return (
      <div className="row p-2 align-items-center">
        <div className="col-md-3 ta-c">
          <div className="row">
            <div className="col cp" onClick={() => onChangeVote(id, { option: 'upVote' })}>
              <FaAngleUp size="50" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              {voteScore}
            </div>
          </div>
          <div className="row">
            <div className="col cp" onClick={() => onChangeVote(id, { option: 'downVote' })}>
              <FaAngleDown size="50" />
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card ">
            <div className="card-body p-3">
              <h5 className="card-title">
                {title}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Author:{author}
              </h6>
              <p className="card-subtitle mb-2 text-muted">
                {date.toDateString()}
              </p>
              <p className="card-subtitle mb-2 text-muted">
                Number of Comments {commentCount}
              </p>
              <p className="card-text">
                {body}
              </p>

              <Link className="btn btn-outline-warning m-1" to={`/editPost/${id}`}>
                Edit
              </Link>
              <Link className="btn btn-outline-info m-1" to={`/${category}/${id}`}>
                View Post
              </Link>

              <button onClick={() => onRemove(id)} className="btn btn-outline-danger m-1">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
