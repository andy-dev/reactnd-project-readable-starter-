import { connect } from 'react-redux';
import Posts from '../components/Posts';

const mapStateToProps = ({ posts }) => {
  return { posts };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
