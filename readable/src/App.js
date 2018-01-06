import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Landing from './components/Landing';
import Category from './components/Category';
import EditPost from './components/EditPost';
import 'bootstrap/dist/css/bootstrap.css';
import AddPost from './components/AddPost';
import Navigation from './components/Navigation';
import DetailContainer from "./containers/DetailContainer";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        <Route
          exact
          path="/"
          render={() =>
            <div>
              <Landing />
            </div>}
        />
        <Route path="/category/:categoryName" render={({ history }) => <Category />} />
        <Route path="/:category/:id" render={({ history }) => <DetailContainer />} />
        <Route path="/addPost/" render={({ history }) => <AddPost />} />
        <Route path="/editPost/:id" render={({ history }) => <EditPost />} />
      </div>
    );
  }
}

export default withRouter(App);
