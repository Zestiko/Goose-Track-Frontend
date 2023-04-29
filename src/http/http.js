import axios from 'axios';
/** Занести наші API */
// export const privateApi = axios.create({
//   baseURL: 'https://goose-track-backend-68sm.onrender.com/api/',
// });

export const publicApi = axios.create({
  baseURL: 'http://127.0.0.1:7777',
});

export const token = {
  set(token) {
    publicApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    publicApi.defaults.headers.Authorization = null;
  },
};
