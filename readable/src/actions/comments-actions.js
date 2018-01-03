import * as API from '../util/API';

import { GET_COMMENTS_FOR_POST, GET_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../constants';

export const getComments = id => {
  return dispatch => {
    API.getAllComments(id).then(comments => {
      dispatch({
        type: GET_COMMENTS_FOR_POST,
        comments,
        meta: {
          transition: (prevState, nextState, action) => ({ pathname: '/detail' })
        }
      });
    });
  };
};
