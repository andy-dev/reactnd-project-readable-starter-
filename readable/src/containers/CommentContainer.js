import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { changeVote, deletePost } from '../actions/posts-actions';
import {addComment, changeCommentVote, getComments} from '../actions/comments-actions';
import { withRouter, Redirect } from 'react-router-dom';

const mapDispatchToProps = (dispatch, currentProps) => ({
  onChangeCommentVote(id, data) {
    dispatch(changeCommentVote(id, data));
  },
  onRemoveVote(id) {
    dispatch(deletePost(id));
  }
});

export default withRouter(connect(null, mapDispatchToProps)(Comment));
