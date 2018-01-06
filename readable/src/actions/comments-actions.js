import * as API from '../util/API';

import {
  GET_COMMENTS_FOR_POST,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  ADD_NEW_COMMENT,
  CHANGE_COMMENT_VOTE
} from '../constants';

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

export const changeCommentVote = (id, vote) => {
  return dispatch => {
    API.changeCommentVote(id, vote).then(comment => {
      dispatch({
        type: CHANGE_COMMENT_VOTE,
        id,
        comment
      });
    });
  };
};

export const deleteComment = id => {
  return dispatch => {
    API.deleteComment(id).then(() => {
      dispatch({
        type: DELETE_COMMENT,
        id
      });
    });
  };
};

export const updateComment = (id, comment) => {
  return dispatch => {
    API.updateComment(id, comment).then(comment => {
      dispatch({
        type: UPDATE_COMMENT,
        id,
        comment
      });
    });
  };
};
