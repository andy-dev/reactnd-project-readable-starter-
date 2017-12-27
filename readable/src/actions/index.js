export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';


export function addPost({ category, post }) {
    return {
        type: ADD_POST,
        category,
        post,
    };
}

export function removePost({ category, post }) {
    return {
        type: REMOVE_POST,
        category,
        post,
    };
}