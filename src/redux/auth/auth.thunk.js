import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  // privateApi,
  publicApi,
  token,
} from 'http/http';


export const authRegisterThunk = createAsyncThunk(
  'register',
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
  'login',
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

export const authCurrentThunk = createAsyncThunk(
  'current',
  async (values, thunkAPI) => {
    try {
      const { data } = await publicApi.post('/users/current', values);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Sorry, something went wrong');
    }
  }
);


export const authLogoutThunk = createAsyncThunk(
  'logout',
  async (values, thunkAPI) => {
    try {
      const { data } = await publicApi.post('/users/logout', values);
      token.unset();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Sorry, something went wrong');
    }
  }
);
