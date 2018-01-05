import * as API from '../util/API';

import { GET_COMMENTS_FOR_POST, GET_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, ADD_NEW_COMMENT } from '../constants';

export const getComments = id => {
  return dispatch => {
    API.getAllComments(id).then(comments => {
      dispatch({
        type: GET_COMMENTS_FOR_POST,
        comments
      });
    });
  };
};

export const addComment = comment => {
  return dispatch => {
    API.addComment(comment).then(comment => {
      dispatch({
        type: ADD_NEW_COMMENT,
        comment
      });
    });
  };
};
