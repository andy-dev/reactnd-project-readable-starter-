import { GET_COMMENTS_FOR_POST, GET_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, ADD_NEW_COMMENT } from '../constants';

export default function(state = {}, action) {
  const { comments, comment } = action;

  switch (action.type) {
    case GET_COMMENTS_FOR_POST:
      return comments;

    case ADD_NEW_COMMENT:
      return [...state, comment];

    case UPDATE_COMMENT:
    // return state.map(item => {
    //     if (item.id === id) return { ...post };
    //     return item;
    // });

    case DELETE_COMMENT:
    // return state.filter(post => post.id !== id);

    default:
      return state;
  }
}
