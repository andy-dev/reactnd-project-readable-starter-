import * as API from '../util/API';

import { GET_ALL_POSTS, ADD_NEW_POST } from '../constants';

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
    // const item = {
    //     packed: false,
    //     post,
    // };

    return dispatch => {
        API.addPost(post).then(post => {
            dispatch({
                type: ADD_NEW_POST,
                post
            });
        });
    };
};


