import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FaPlus from 'react-icons/lib/fa/plus';
import FaSortAmountAsc from 'react-icons/lib/fa/sort-amount-asc';
import FaSortAmountDesc from 'react-icons/lib/fa/sort-amount-desc';

import ReactPostsContainer from '../containers/ReactPostsContainer';
import ReduxPostsContainer from '../containers/ReduxPostsContainer';
import UdacityPostsContainer from '../containers/UdacityPostsContainer';

class Category extends Component {
  state = {
    sortedBy: '-voteScore'
  };

  changeSort(sortBy) {
    this.setState({ sortedBy: sortBy });
  }

  render() {
    const { match: { params } } = this.props;

    let container = null;

    if (params.categoryName === 'react') {
      container = <ReactPostsContainer sortedBy={this.state.sortedBy} />;
    } else if (params.categoryName === 'redux') {
      container = <ReduxPostsContainer sortedBy={this.state.sortedBy} />;
    } else {
      container = <UdacityPostsContainer sortedBy={this.state.sortedBy} />;
    }

    return (
      <div>
        <h1 className="ta-c">
          Category {params.categoryName}
        </h1>

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

        {container}
      </div>
    );
  }
}

export default withRouter(Category);
