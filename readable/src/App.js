import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from './components/landing';
import Category from './components/category';
import Detail from './components/detail';
import EditPost from './components/editPost';
import 'bootstrap/dist/css/bootstrap.css';
import AddPost from './components/AddPost';
import Navigation from './components/Navigation';

class App extends Component {
  state: {
    sorter: 'true'
  };

  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        <Route
          exact
          path="/"
          render={() =>
            <div>
              <Landing sortedBy="alfa" />
            </div>}
        />
        <Route path="/category/:categoryName" render={({ history }) => <Category />} />
        <Route path="/detail" render={({ history }) => <Detail />} />
        <Route path="/addPost/" render={({ history }) => <AddPost />} />
        <Route path="/editPost/:id" render={({ history }) => <EditPost />} />
      </div>
    );
  }
}

export default withRouter(App);
