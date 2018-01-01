import { connect } from 'react-redux';
import Posts from '../components/Posts';

const mapStateToProps = ({ posts }) => {
    return { posts: posts};
};

const mapDispatchToProps = dispatch => ({
    // onCheckOff(item) {
    //   dispatch(toggleItem(item));
    // },
    // onRemove(item) {
    //   dispatch(removeItem(item));
    // },
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);