import * as API from '../util/API';

import { GET_ALL_POSTS, ADD_NEW_POST, DELETE_POST, UPDATE_POST } from '../constants';

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

export const addPost = post => {
  return dispatch => {
    API.addPost(post).then(post => {
      dispatch({
        type: ADD_NEW_POST,
        post
      });
    });
  };
};

export const updatePost = (id, post) => {
  return dispatch => {
    API.updatePost(id, post).then(post => {
      console.log(post);
      dispatch({
        type: UPDATE_POST,
        id,
        post
      });
    });
  };
};

export const deletePost = id => {
  return dispatch => {
    API.deletePost(id).then(() => {
      dispatch({
        type: DELETE_POST,
        id
      });
    });
  };
};
