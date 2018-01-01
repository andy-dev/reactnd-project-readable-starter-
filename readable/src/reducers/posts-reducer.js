import { ADD_NEW_POST, GET_ALL_POSTS } from '../constants';

export default function(state = {}, action) {
  const { posts, post } = action;

  switch (action.type) {
    case ADD_NEW_POST:
      return { ...state, post };

    case GET_ALL_POSTS:
      return posts;

    default:
      return state;
  }
}
