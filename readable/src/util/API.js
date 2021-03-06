const api = 'http://localhost:3001';

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token
};

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers }).then(res => res.json()).then(data => data);

export const getAllPosts = () => fetch(`${api}/posts`, { headers }).then(res => res.json()).then(data => data);

export const addPost = body =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());

export const deletePost = id =>
  fetch(`${api}/posts/${id}`, { method: 'DELETE', headers }).then(res => res.json()).then(data => data);

export const updatePost = (id, body) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());
};

export const changeVote = (id, body) => {
  return fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());
};

export const getAllComments = id =>
  fetch(`${api}/posts/${id}/comments`, { headers }).then(res => res.json()).then(data => data);

export const addComment = body =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());

export const changeCommentVote = (id, body) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());
};

export const deleteComment = id =>
  fetch(`${api}/comments/${id}`, { method: 'DELETE', headers }).then(res => res.json()).then(data => data);

export const updateComment = (id, body) => {
  return fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());
};
