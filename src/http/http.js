import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://tracker-uliw.onrender.com/api/',
});

export const token = {
  set(token) {
    publicApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    publicApi.defaults.headers.Authorization = null;
  },
};
