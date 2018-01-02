import { connect } from 'react-redux';
import Posts from '../components/Posts';
import { changeVote, deletePost } from '../actions/index';

const mapStateToProps = ({posts}) => {

  return { posts };
};

const mapDispatchToProps = dispatch => ({
  onChangeVote(id, data) {
    dispatch(changeVote(id, data));
  },

  onRemove(id) {
    dispatch(deletePost(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
