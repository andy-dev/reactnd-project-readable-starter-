import React, { Component } from 'react';

class Detail extends Component {
  componentDidMount() {
    const { match: { params }, getCommentsForPost } = this.props;
    getCommentsForPost(params.id);
  }

  render() {
    return (
      <div>
        <h1>Detail</h1>
      </div>
    );
  }
}

export default Detail;
