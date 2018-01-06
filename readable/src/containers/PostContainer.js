import { connect } from 'react-redux';
import Post from '../components/Post';
import { changeVote, deletePost } from '../actions/posts-actions';
import { getComments } from '../actions/comments-actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, currentProps) => ({
  getCommentsForPost(id) {
    dispatch(getComments(id));
  },
  onChangeVote(id, data) {
    dispatch(changeVote(id, data));
  },
  onRemove(id) {
    dispatch(deletePost(id));
  }
});

export default withRouter(connect(null, mapDispatchToProps)(Post));
