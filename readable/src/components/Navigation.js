import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../util/API';

class Navigation extends Component {
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
            </div>
          : <div>loading app</div>}
      </div>
    );
  }
}

export default Navigation;
