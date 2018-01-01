import React, { Component } from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';
import { addPost } from '../actions/index';
var cuid = require('cuid');

class EditPost extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { add } = this.props;
    const values = serializeForm(event.target, { hash: true });
    values.id = cuid();
    values.timestamp = Date.now();
    add(values);
  };

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
    add: data => dispatch(addPost(data))
  };
}

export default connect(null, mapDispatchToProps)(EditPost);

// import serializeForm from 'form-serialize';
// import { connect } from 'react-redux';
// import { addPost } from '../actions/index';
// var cuid = require('cuid');
//
// // | `POST /posts` | Add a new post. | **id** -
// // UUID should be fine, but any unique id will work <br> **timestamp** -
// // [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> **title** -
// // [String] <br> **body** -
// // [String] <br> **author** -
// // [String] <br> **category** -
// //  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. |
//
// class EditPost extends Component {
//   handleSubmit(e) {
//     e.preventDefault();
//     console.log(this.props);
//     // console.log(this.props);
//     // const { add } = this.props;
//     // const values = serializeForm(e.target, { hash: true });
//     // values.id = cuid();
//     // values.timestamp = Date.now();
//     // console.log(values);
//     // add(values);
//   }
//
//   render() {
//     console.log(this.props);
//     const { add } = this.props;
//     return (
//       <div className="p-15">
//         <h1 className="ta-c">Edit Post</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="title" placeholder="title">
//               Title
//             </label>
//             <input className="form-control" type="text" name="title" placeholder="Title" />
//           </div>
//
//           <div className="form-group">
//             <label htmlFor="author" placeholder="Author">
//               Author
//             </label>
//             <input className="form-control" type="text" name="author" placeholder="Author" />
//           </div>
//
//           <div className="form-group">
//             <label htmlFor="category">Category</label>
//             <select className="form-control" name="category">
//               <option value="react">React</option>
//               <option value="redux">Redux</option>
//               <option value="udacity">Udacity</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="body">Post</label>
//             <textarea className="form-control" name="body" rows="10" />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Add Post
//           </button>
//         </form>
//       </div>
//     );
//   }
// }
//
// const mapStateToProps = ({ newItemValue }) => ({ post: newItemValue });
//
// function mapDispatchToProps(dispatch) {
//   return {
//     add: data => dispatch(addPost(data))
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
// // export default connect()(EditPost);
//
// // export default EditPost;
