import { connect } from 'react-redux';
import Comment from '../components/Comment';
import { changeCommentVote, deleteComment, updateComment } from '../actions/comments-actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, currentProps) => ({
  onChangeCommentVote(id, data) {
    dispatch(changeCommentVote(id, data));
  },

  updateComment: (id, data) => {
    dispatch(updateComment(id, data));
  },

  onRemoveComment(id) {
    dispatch(deleteComment(id));
  }
});

export default withRouter(connect(null, mapDispatchToProps)(Comment));
