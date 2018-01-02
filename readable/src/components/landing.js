import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AllPostsContainer from '../containers/AllPostsContainer';
import FaPlus from 'react-icons/lib/fa/plus';

class Landing extends Component {
  state = {
    sortedBy: '-voteScore'
  };

  changeSort(sortBy) {
    this.setState({ sortedBy: sortBy });
  }

  render() {
    return (
      <div>
        <h1 className="ta-c">Posts</h1>

        <div className="row">
          <div className="col cp mr-3">
            Sort By:
            <button
              className="btn-sm btn-primary m-1"
              onClick={() => {
                this.changeSort('timestamp');
              }}
            >
              Date
            </button>
            <button
              className="btn-sm btn-primary m-1"
              onClick={() => {
                this.changeSort('-voteScore');
              }}
            >
              Votes
            </button>
          </div>
          <div className="col" />
          <div className="col" />
          <div className="col" />
          <div className="col cp mr-3">
            <Link to={`/addPost/`}>
              Add Post <FaPlus />
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <AllPostsContainer sortedBy={this.state.sortedBy} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);
