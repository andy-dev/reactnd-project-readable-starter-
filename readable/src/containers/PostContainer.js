import { connect } from 'react-redux';
import Post from '../components/Post';
import { changeVote, deletePost } from '../actions/posts-actions';

const mapDispatchToProps = dispatch => ({
  onChangeVote(id, data) {
    dispatch(changeVote(id, data));
  },
  onRemove(id) {
    dispatch(deletePost(id));
  }
});

export default connect(null, mapDispatchToProps)(Post);
