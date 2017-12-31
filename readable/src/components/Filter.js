import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { value } = this.props;
    return <input value={value} />;
  }
}

export default Filter;
