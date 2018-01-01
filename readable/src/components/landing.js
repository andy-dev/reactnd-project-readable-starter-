import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AllPostsContainer from '../containers/AllPostsContainer';
import FaPlus from 'react-icons/lib/fa/plus';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1 className="ta-c">Posts</h1>

        <div className="row ta-r">
          <div className="col cp mr-3">
            <Link to={`/addPost/`}>
              Add Post <FaPlus />
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <AllPostsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);

//
// <button className="icon-btn">
//   <MdAdd size={30} />
// </button>
