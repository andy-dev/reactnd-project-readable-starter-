import React, { Component } from 'react';
import * as API from '../util/API';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
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
      <Container>
        {categories.length !== 0
          ? <div>
              <Row>
                {categories['categories'].map(category =>
                  <Col key={category.name} md="4">
                    <div>
                      <Link to={`/category/${category.name}`}>
                        {category.name}
                      </Link>
                      <button className="icon-btn">
                        <MdAdd size={30} />
                      </button>
                    </div>
                  </Col>
                )}
              </Row>
              <Row>
                <Col md="4">
                  <ReactPostsContainer />
                </Col>
                <Col md="4">
                  <ReduxPostsContainer />
                </Col>
                <Col md="4">
                  <UdacityPostsContainer />
                </Col>
              </Row>
            </div>
          : <div>loading component</div>}
      </Container>
    );
  }
}

export default withRouter(Landing);
