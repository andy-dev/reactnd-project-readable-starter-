import React, { Component } from 'react';
import serializeForm from 'form-serialize';
var cuid = require('cuid');

// | `POST /posts` | Add a new post. | **id** -
// UUID should be fine, but any unique id will work <br> **timestamp** -
// [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> **title** -
// [String] <br> **body** -
// [String] <br> **author** -
// [String] <br> **category** -
//  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. |

class EditPost extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    values.id = cuid();
    values.timestamp = Date.now();
    console.log(values);
  }

  render() {
    return (
      <div className="p-15">
        <h1 className="ta-c">Edit Post</h1>
        <form onSubmit={this.handleSubmit}>
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
          <button className="btn btn-primary">Add Post</button>
        </form>
      </div>
    );
  }
}

export default EditPost;
