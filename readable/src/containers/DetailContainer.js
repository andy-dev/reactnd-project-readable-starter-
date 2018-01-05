import { connect } from 'react-redux';
import Detail from '../components/detail';
import { addComment, getComments } from '../actions/comments-actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ comments, posts }) => {
  return { comments, posts };
};

const mapDispatchToProps = (dispatch, currentProps) => ({
  addComment(data) {
    dispatch(addComment(data));
  },
  getCommentsForPost(id) {
    dispatch(getComments(id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));
