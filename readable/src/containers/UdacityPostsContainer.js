import { connect } from 'react-redux';
import Posts from '../components/Posts';

const mapStateToProps = ({ posts }) => {
  return { posts: posts.filter(post => post.category === 'udacity') };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
