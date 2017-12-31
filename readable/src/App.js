import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from './components/landing';
import Category from './components/category';
import Detail from './components/detail';
import EditPost from './components/editPost';

class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() =>
            <div>
              <Landing />
            </div>}
        />
        <Route path="/category/:categoryName" render={({ history }) => <Category />} />
        <Route path="/detail" render={({ history }) => <Detail />} />
        <Route path="/editPost" render={({ history }) => <EditPost />} />
      </div>
    );
  }
}

export default withRouter(App);
