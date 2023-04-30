import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicApi, token } from 'http/http';

export const authRegisterThunk = createAsyncThunk(
  'user/register',
  async (values, thunkAPI) => {
    try {
      const { data } = await publicApi.post('/auth/register', values);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Sorry, something went wrong');
    }
  }
);

export const authLoginThunk = createAsyncThunk(
  'user/login',
  async (values, thunkAPI) => {
    try {
      const { data } = await publicApi.post('/auth/login', values);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Sorry, something went wrong');
    }
  }
);

export const authLogoutThunk = createAsyncThunk(
  'user/logout',
  async (values, thunkAPI) => {
    try {
      const { data } = await publicApi.post('/user/logout', values);
      token.unset();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Sorry, something went wrong');
    }
  }
);

export const authCurrentThunk = createAsyncThunk(
  'user/current',
  async (values, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      token.set(persistedToken);
      const { data } = await publicApi.get('/user/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Sorry, something went wrong');
    }
  }
);




  
export const updateUserProfile = createAsyncThunk(
  'user/info',
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    
    try {
      token.set(persistedToken);
      const { data } = await publicApi.patch('/user/info', formData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        `Whoops, ${error.response.statusText.toLowerCase()} (${
          error.response.status
        })`
      );
    }
  }
); 
