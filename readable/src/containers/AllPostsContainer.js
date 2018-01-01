import { connect } from 'react-redux';
import Posts from '../components/Posts';
import { deletePost } from '../actions/index';

const mapStateToProps = ({ posts }) => {
  return { posts: posts };
};

const mapDispatchToProps = dispatch => ({
  // onCheckOff(item) {
  //   dispatch(toggleItem(item));
  // },
  onRemove(id) {
    dispatch(deletePost(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
