import React, { Component } from 'react';
import * as API from '../API';

import { Container, Row, Col } from 'reactstrap';
import { MdAdd } from 'react-icons/lib/md';
import 'bootstrap/dist/css/bootstrap.css';

class Landing extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    API.getAllCategories().then(categories => {
      console.log(categories);
      this.setState({ categories });
    });

    API.getAllPosts().then(categories => {});
  }

  render() {
    const { categories } = this.state;
    return (
      <Container>
        {categories.length !== 0
          ? <Row>
              {categories['categories'].map(category =>
                <Col key={category.name} md="3">
                  <div>
                    <p>
                      {category.name}
                    </p>
                    <button className="icon-btn">
                      <MdAdd size={30} />
                    </button>
                  </div>
                </Col>
              )}
            </Row>
          : <div>loading component</div>}
      </Container>
    );
  }
}

export default Landing;
