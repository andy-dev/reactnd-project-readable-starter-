import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Landing from './components/Landing';
import Category from './components/Category';
import EditPost from './components/EditPost';
import 'bootstrap/dist/css/bootstrap.css';
import AddPost from './components/AddPost';
import Navigation from './components/Navigation';
import DetailContainer from './containers/DetailContainer';
import PageNotFound from './components/PageNotFound';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navigation />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              <div>
                <Landing />
              </div>}
          />
          <Route exact path="/category/:categoryName" render={({ history }) => <Category />} />
          <Route exact path="/editPost/:id" render={({ history }) => <EditPost />} />
          <Route exact path="/:category/:id" render={({ history }) => <DetailContainer />} />
          <Route exact path="/addPost/" render={({ history }) => <AddPost />} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
