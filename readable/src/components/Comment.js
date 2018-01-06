import React, { Component } from 'react';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import serializeForm from 'form-serialize';

class Comment extends Component {
  state = {
    editMode: false
  };

  toggleEditMode(mode) {
    this.setState({ editMode: mode });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { updateComment, id } = this.props;
    const values = serializeForm(event.target, { hash: true });
    values.timestamp = Date.now();
    updateComment(id, values);

    event.target.reset();
    this.toggleEditMode(false);
  };

  render() {
    const { body, author, voteScore, onChangeCommentVote, id, onRemoveComment } = this.props;
    return (
      <div className="row p-2 align-items-center">
        <div className="col-md-2 offset-md-3 ta-c">
          <div className="row">
            <div className="col cp" onClick={() => onChangeCommentVote(id, { option: 'upVote' })}>
              <FaAngleUp size="20" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              {voteScore}
            </div>
          </div>
          <div className="row">
            <div className="col cp" onClick={() => onChangeCommentVote(id, { option: 'downVote' })}>
              <FaAngleDown size="20" />
            </div>
          </div>
        </div>
        {this.state.editMode === false
          ? <div className="col-md-6 ">
              <div className="card ">
                <div className="card-body p-3">
                  <h6 className="card-subtitle mb-2 text-muted">
                    {author}
                  </h6>
                  <p className="card-text">
                    {body}
                  </p>
                  <button onClick={() => this.toggleEditMode(true)} className="btn-sm btn-outline-warning m-1">
                    Edit Comment
                  </button>

                  <button onClick={() => onRemoveComment(id)} className="btn-sm btn-outline-danger m-1">
                    Delete Comment
                  </button>
                </div>
              </div>
            </div>
          : <div className="col-md-6 ">
              <div className="card ">
                <div className="card-body p-3">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="author" placeholder="Author">
                        Author
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                        placeholder="Author"
                        defaultValue={author}
                      />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="body" rows="3" defaultValue={body} />
                    </div>
                    <button type="submit" className="btn-sm btn-primary">
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>}
      </div>
    );
  }
}

// Post.propTypes = {
//
// };
//
// Post.defaultProps = {

// };

export default Comment;
