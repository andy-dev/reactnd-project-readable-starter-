import { ADD_NEW_POST, DELETE_POST, GET_ALL_POSTS, UPDATE_POST } from '../constants';

export default function(state = {}, action) {
  const { posts, post, id } = action;

  switch (action.type) {
    case ADD_NEW_POST:
      return { ...state, post };

    case GET_ALL_POSTS:
      return posts;

    case UPDATE_POST:
      debugger;
      return {
        ...state,
        [id]: post
      };

    case DELETE_POST:
      return state.filter(post => post.id !== id);

    default:
      return state;
  }
}
