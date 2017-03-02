import axios from 'axios';

export const FETCH_POSTS = 'fetch all posts';
export const FETCH_POST = 'fetch one post';
export const CREATE_POST = 'create new post';
export const DELETE_POST = 'delete an existing post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=zagnut';

export function fetchPosts() {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function createPost(props) {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.post(url, props);
    return {
        type: CREATE_POST,
        payload: request
    };
}

export function deletePost(id) {
    const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
    const request = axios.delete(url);
    
    return {
        type: DELETE_POST,
        payload: request
    };
}
