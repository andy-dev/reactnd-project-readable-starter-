import React, { Component } from 'react';
import * as API from '../API';

class Landing extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    API.getAllCategories().then(categories => {
      console.log(categories);
      this.setState({ categories });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          <li>
            {categories.length !== 0
              ? <ul className="categories">
                  {categories['categories'].map(category =>
                    <li key={category} className="subheader">
                      {category.name}
                    </li>
                  )}
                </ul>
              : <div>
                  <p>waiting for data</p>
                </div>}
          </li>
        </ul>
      </div>
    );
  }
}

export default Landing;
