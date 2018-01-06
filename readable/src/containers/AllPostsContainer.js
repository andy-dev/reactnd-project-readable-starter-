import { connect } from 'react-redux';
import Posts from '../components/Posts';

const mapStateToProps = ({ posts }) => {
  return { posts };
};



export default connect(mapStateToProps, null)(Posts);
