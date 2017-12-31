import * as API from '../util/API';

import { GET_ALL_POSTS } from '../constants';

export const getAllPosts = () => {
  return dispatch => {
    API.getAllPosts().then(posts => {
      dispatch({
        type: GET_ALL_POSTS,
        posts
      });
    });
  };
};

// todo see if this is a better way to express
// export const receivePosts = posts => ({
//     type: FETCH_POSTS,
//     posts
// });
//
// export const fetchPosts = () => dispatch => {
//     API.getAllPosts().then(posts => {
//         dispatch(receivePosts(posts));
//     });
// };
