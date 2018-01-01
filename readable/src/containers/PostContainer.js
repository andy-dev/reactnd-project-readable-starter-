import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost } from '../actions/index';


const mapDispatchToProps = dispatch => ({
    // onCheckOff(item) {
    //   dispatch(toggleItem(item));
    // },
    onRemove(id) {
        dispatch(deletePost(id));
    }
});

export default connect(null, mapDispatchToProps)(Post);