import { ADD_NEW_POST, CHANGE_VOTE, DELETE_POST, GET_ALL_POSTS, UPDATE_POST } from '../constants';

export default function(state = {}, action) {
  const { posts, post, id } = action;

  switch (action.type) {
    case GET_ALL_POSTS:
      return posts;

    case ADD_NEW_POST:
      return [...state, post];

    case UPDATE_POST:
      return state.map(item => {
        if (item.id === id) return { ...post };
        return item;
      });

    case CHANGE_VOTE:
      return state.map(item => {
        if (item.id === id) return { ...post };
        return item;
      });

    case DELETE_POST:

      return state.filter(post => post.id !== id);

    default:
      return state;
  }
}
