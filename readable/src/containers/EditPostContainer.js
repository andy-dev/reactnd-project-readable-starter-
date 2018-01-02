import { connect } from 'react-redux';
import EditPost from '../components/editPost';

const mapStateToProps = ({ posts }) => {
    return { posts: posts };
};

const mapDispatchToProps = dispatch => ({
    // onCheckOff(item) {
    //   dispatch(toggleItem(item));
    // },
    // onRemove(item) {
    //   dispatch(removeItem(item));
    // },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);