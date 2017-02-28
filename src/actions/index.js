import axios from 'axios';

export const FETCH_POSTS = 'fetch posts';

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

