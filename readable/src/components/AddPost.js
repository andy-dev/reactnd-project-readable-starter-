import React, { Component } from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';
import { addPost } from '../actions/index';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TiHome from 'react-icons/lib/ti/home';

var cuid = require('cuid');

class AddPost extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { add } = this.props;
    const values = serializeForm(event.target, { hash: true });
    values.id = cuid();
    values.timestamp = Date.now();
    add(values);
    event.target.reset();
  };

  render() {
    return (
      <div className="p-15">
        <h1 className="ta-c">Add Post</h1>
        <div className="row mb-5">
          <div className="col cp">
            <Link to={`/`}>
              See All Posts <TiHome />
            </Link>
          </div>
        </div>
        <form id="addPostForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" placeholder="title">
              Title
            </label>
            <input className="form-control" type="text" name="title" placeholder="Title" />
          </div>

          <div className="form-group">
            <label htmlFor="author" placeholder="Author">
              Author
            </label>
            <input className="form-control" type="text" name="author" placeholder="Author" />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select className="form-control" name="category">
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="body">Post</label>
            <textarea className="form-control" name="body" rows="10" />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Post
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: data => {
      dispatch(addPost(data));
    }
  };
}

export default withRouter(connect(null, mapDispatchToProps)(AddPost));
