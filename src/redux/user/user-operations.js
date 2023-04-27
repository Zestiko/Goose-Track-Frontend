import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goose-track-backend.herokuapp.com';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/user');
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response.status === 401
          ? 'Whoops, authorization required :('
          : `Whoops, ${error.response.statusText.toLowerCase()}`
      );
    }
  }
)
  
export const updateUserProfile = createAsyncThunk(
  'user/info',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/user/info', formData);
      return data;
    } catch (error) {
      return rejectWithValue(
        `Whoops, ${error.response.statusText.toLowerCase()} (${
          error.response.status
        })`
      );
    }
  }
);
