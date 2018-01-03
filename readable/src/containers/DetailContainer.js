import { connect } from 'react-redux';
import Detail from '../components/detail';
import { getComments } from '../actions/comments-actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, currentProps) => ({
  getCommentsForPost(id) {
    dispatch(getComments(id));
  }
});

export default withRouter(connect(null, mapDispatchToProps)(Detail));
