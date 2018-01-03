import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../util/API';
import TiHome from 'react-icons/lib/ti/home';


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
                <div className="col-md-3 cp ta-c p-3">
                  <Link to={`/`}>
                    All Posts <TiHome />
                  </Link>
                </div>

                {categories['categories'].map(category =>
                  <div className="col-md-3 p-3" key={category.name}>
                    <div className="ta-c">
                      <Link to={`/category/${category.name}`}>
                        {category.name} /
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
