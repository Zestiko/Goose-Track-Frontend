import axios from 'axios';
/** Занести наші API */
// export const privateApi = axios.create({
//   baseURL: 'https://goose-track-backend-68sm.onrender.com/api/',
// });

export const publicApi = axios.create({
  baseURL: 'https://goose-track-backend-68sm.onrender.com/api/',
});

export const token = {
  set(token) {
    publicApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    publicApi.defaults.headers.Authorization = null;
  },
};
