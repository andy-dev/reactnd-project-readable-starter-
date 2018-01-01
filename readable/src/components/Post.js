import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';

class Post extends Component {
  render() {
    console.log(this.props);
    const { body, title, author, id, onRemove } = this.props;
    return (
      <div className="row p-2 align-items-center">
        <div className="col-md-2 ta-c">
          <div className="row">
            <div className="col">
              <FaAngleUp size="30" />
            </div>
          </div>
          <div className="row">
            <div className="col">Vote Count:</div>
          </div>
          <div className="row">
            <div className="col">
              <FaAngleDown size="30" />
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
              <a href="#" className="card-link">
                Edit
              </a>
              <a href="#" className="card-link">
                View Detail
              </a>
              <button onClick={() => onRemove(id)} className="card-link">
                Delete {id}
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
