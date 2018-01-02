import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TiHome from 'react-icons/lib/ti/home';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import serializeForm from 'form-serialize';
import { updatePost } from '../actions/index';
var cuid = require('cuid');

class EditPost extends Component {
  state: {
    post: null,
    redirect: false
  };

  componentWillMount() {
    const { match: { params }, posts } = this.props;
    this.setState(() => ({ post: posts.filter(post => post.id === params.id) }));
  }

  handleSubmit = event => {
    event.preventDefault();
    const { updatePost } = this.props;
    const { post } = this.state;
    const values = serializeForm(event.target, { hash: true });
    updatePost(post[0].id, values);

    event.target.reset();
    this.setState({ redirect: true });
  };

  render() {
    const { redirect, post } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
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
            <input className="form-control" type="text" name="title" placeholder="Title" defaultValue={post[0].title} />
          </div>

          <div className="form-group">
            <label htmlFor="author" placeholder="Author">
              Author
            </label>
            <input
              className="form-control"
              type="text"
              name="author"
              placeholder="Author"
              defaultValue={post[0].author}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select className="form-control" name="category" defaultValue={post[0].category}>
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="body">Post</label>
            <textarea className="form-control" name="body" rows="10" defaultValue={post[0].body} />
          </div>
          <button type="submit" className="btn btn-success">
            Edit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts: posts };
};

function mapDispatchToProps(dispatch) {
  return {
    updatePost: (id, data) => {
      dispatch(updatePost(id, data));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPost));
