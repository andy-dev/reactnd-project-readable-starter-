import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import PostContainer from '../containers/PostContainer';
import CommentContainer from '../containers/CommentContainer';
var cuid = require('cuid');

class Detail extends Component {
  componentDidMount() {
    const { match: { params }, getCommentsForPost } = this.props;
    getCommentsForPost(params.id);
  }
    
  componentDidUpdate() {
    const { match: { params } } = this.props;
    let postFound = this.props.posts.filter(post => post.id === params.id);
    if (postFound.length === 0) {
      console.log('length is 0');
      this.props.history.push('/404');
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { addComment, match: { params } } = this.props;
    const values = serializeForm(event.target, { hash: true });
    values.id = cuid();
    values.timestamp = Date.now();
    values.parentId = params.id;
    addComment(values);
    event.target.reset();
  };

  render() {
    const { posts, comments, match: { params }, history } = this.props;

    return (
      <div>
        <h1 className="ta-c">Detail</h1>

        {posts.length !== undefined
          ? posts.map(post => {
              if (post.id === params.id) {
                return <PostContainer key={post.id} post={post} {...post} />;
              }
            })
          : <div>Loading</div>}

        {comments.length !== undefined
          ? comments.map(comment => <CommentContainer key={comment.id} comment={comment} {...comment} />)
          : <div>Loading</div>}

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form id="addPostForm" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="author" placeholder="Author">
                  Add Comment
                </label>
                <input className="form-control" type="text" name="author" placeholder="Author" />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="body" rows="3" />
              </div>
              <button type="submit" className="btn-sm btn-primary">
                Add Comment
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
