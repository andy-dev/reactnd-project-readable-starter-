import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TiHome from 'react-icons/lib/ti/home';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { addPost } from '../actions/index';
var cuid = require('cuid');

class EditPost extends Component {
  state: {
    post: ''
  };

  componentWillMount() {
    console.log('here');
    const { match: { params }, posts } = this.props;
    console.log(params.id);
    console.log(this.props);

    this.setState(() => ({ post: posts.filter(post => post.id === params.id) }));
  }

  handleSubmit = event => {
    event.preventDefault();
    const { add } = this.props;
    const values = serializeForm(event.target, { hash: true });
    values.id = cuid();
    values.timestamp = Date.now();
    add(values);
  };

  render() {
    const { post } = this.state;

    console.log(post);

    return (
      <div className="p-15">
        <h1 className="ta-c">Edit Post</h1>
        <div className="row mb-5">
          <div className="col cp">
            <Link to={`/`}>
              See All Posts <TiHome />
            </Link>
          </div>
        </div>
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

const mapStateToProps = ({ posts }) => {
  return { posts: posts };
};

// function mapDispatchToProps(dispatch) {
//   // return {
//   //   update: data => dispatch(addPost(data))
//   // };
// }

export default withRouter(connect(mapStateToProps, null)(EditPost));
