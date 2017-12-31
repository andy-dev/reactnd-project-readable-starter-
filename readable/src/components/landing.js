import React, { Component } from 'react';
import * as API from '../util/API';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { MdAdd } from 'react-icons/lib/md';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPostsContainer from '../containers/ReactPostsContainer';
import ReduxPostsContainer from '../containers/ReduxPostsContainer';
import UdacityPostsContainer from '../containers/UdacityPostsContainer';

class Landing extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    API.getAllCategories().then(categories => {
      this.setState({ categories });
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        {categories.length !== 0
          ? <div className="row">
              {categories['categories'].map(category =>
                <div className="col-md-4 debug" key={category.name}>
                  <div>
                    <Link to={`/category/${category.name}`}>
                      {category.name}
                    </Link>
                    <button className="icon-btn">
                      <MdAdd size={30} />
                    </button>
                  </div>
                </div>
              )}
              <div className="row">
                <div className="col-md-4">
                  <ReactPostsContainer />
                </div>
                <div className="col-md-4">
                  <ReduxPostsContainer />
                </div>
                <div className="col-md-4">
                  <UdacityPostsContainer />
                </div>
              </div>
            </div>
          : <div>loading component</div>}
      </div>
    );
  }
}

export default withRouter(Landing);
