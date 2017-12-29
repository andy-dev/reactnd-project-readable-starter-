import * as API from '../API';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';

export function addPost({ category, post }) {
  return {
    type: ADD_POST,
    category,
    post
  };
}

export function removePost({ category, post }) {
  return {
    type: REMOVE_POST,
    category,
    post
  };
}

export const receivePosts = posts => ({
  type: FETCH_POSTS,
  posts
});

export const fetchPosts = () => dispatch =>
  API
    .getAllPosts()
    .then(posts => dispatch(receivePosts(posts)));
