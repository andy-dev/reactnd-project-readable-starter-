import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AllPostsContainer from '../containers/AllPostsContainer';
import FaPlus from 'react-icons/lib/fa/plus';
import FaSortAmountAsc from 'react-icons/lib/fa/sort-amount-asc';
import FaSortAmountDesc from 'react-icons/lib/fa/sort-amount-desc';

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
          <div className="col-md-3  ta-c cp ">
            Sort By:
            <button
              className="btn-sm  btn-outline-info  m-1"
              onClick={() => {
                this.changeSort('timestamp');
              }}
            >
              <FaSortAmountAsc /> Date
            </button>
            <button
              className="btn-sm btn-outline-info m-1"
              onClick={() => {
                this.changeSort('-voteScore');
              }}
            >
              <FaSortAmountDesc /> Votes
            </button>
          </div>
          <div className="col-md-9  cp">
            <Link className="btn btn-outline-success" to={`/addPost/`}>
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
