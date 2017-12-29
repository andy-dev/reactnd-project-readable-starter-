import { ADD_POST, REMOVE_POST, FETCH_POSTS } from '../actions/index';


const initialPostsState  = {
    posts:null,
    comments:null,
}


function posts(state = initialPostsState, action) {

    const { category, posts } = action;

    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                [posts]: posts
            }

        case ADD_POST:
            return {}

        case REMOVE_POST:
            return {}


        default:
            return state;
    }
}


export default posts;
