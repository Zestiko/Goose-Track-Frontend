import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicApi } from 'http/http';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await publicApi.get('/user');
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
      const { data } = await publicApi.patch('/user/info', formData);
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
