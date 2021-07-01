import axios from 'axios';
import { BASE_URL } from './constants';

// const token = localStorage.getItem('token');

export const Api = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: 'bearer', 'content-type': 'application/json' },
});

// export default Api;
