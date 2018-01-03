import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TiHome from 'react-icons/lib/ti/home';
import FaPlus from 'react-icons/lib/fa/plus';

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
        <div className="row mb-5">
          <div className="col cp">
            <Link to={`/`}>
              See All Posts <TiHome />
            </Link>
          </div>
        </div>

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
        {container}
      </div>
    );
  }
}

export default withRouter(Category);
