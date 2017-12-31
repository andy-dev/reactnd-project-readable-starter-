import { GET_ALL_POSTS } from '../constants';

export default function(state = {}, action) {
  const { posts } = action;

  switch (action.type) {
    case GET_ALL_POSTS:
      return posts;

    default:
      return state;
  }
}


