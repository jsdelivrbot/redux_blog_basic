import axios from 'axios';
import { FETCH_POSTS } from './types';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=zagnut';

export function fetchPosts() {
    return {
        type: FETCH_POSTS,
        payload: ''
    };
}




