import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Landing from './components/landing';
import Category from './components/category';
import Detail from './components/detail';
import EditPost from './components/editPost';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() =>
            <div>
              <Landing />
            </div>}
        />
        <Route path="/category" render={({ history }) => <Category />} />
        <Route path="/detail" render={({ history }) => <Detail />} />
        <Route path="/editPost" render={({ history }) => <EditPost />} />
      </div> /*ending root div*/
    );
  }
}

export default connect()(App);
