import { connect } from 'react-redux';
import EditPost from '../components/editPost';

const mapStateToProps = ({ posts }) => {
    return { posts: posts };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);