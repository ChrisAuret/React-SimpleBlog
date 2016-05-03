import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = "http://reduxplog/herokyaoo.com/api";
const API_KEY = "?KEY=klO32390lk";

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    
    return {
        type : FETCH_POSTS,
        payload: request
    };
}