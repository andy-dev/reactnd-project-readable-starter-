import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <h1 className="ta-c">404 Page not found</h1>
      </div>
    );
  }
}

export default withRouter(PageNotFound);
