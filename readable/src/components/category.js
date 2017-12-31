import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Category extends Component {
  render() {
    const { match: { params } } = this.props;
    return (
      <div>
        <h1>
          Category {params.categoryName}
        </h1>
      </div>
    );
  }
}

export default withRouter(Category);
