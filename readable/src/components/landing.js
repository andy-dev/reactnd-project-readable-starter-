import React, { Component } from 'react';
import * as API from '../util/API';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AllPostsContainer from '../containers/AllPostsContainer';
import FaPlus from 'react-icons/lib/fa/plus';

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
        <h1 className="ta-c">Posts</h1>

        <div className="row ta-r">
          <div className="col cp">
            Add Post <FaPlus />
          </div>
        </div>

        {categories.length !== 0
          ? <div>
              <div className="row">
                {categories['categories'].map(category =>
                  <div className="col" key={category.name}>
                    <div className="ta-c">
                      <Link to={`/category/${category.name}`}>
                        {category.name}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="row">
                <div className="col">
                  <AllPostsContainer />
                </div>
              </div>
            </div>
          : <div>loading component</div>}
      </div>
    );
  }
}

export default withRouter(Landing);

//
// <button className="icon-btn">
//   <MdAdd size={30} />
// </button>
