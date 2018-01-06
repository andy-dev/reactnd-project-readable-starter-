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
              } else {
                {
                  history.push('/404');
                }
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
