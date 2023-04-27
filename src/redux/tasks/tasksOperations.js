import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const gooseApi = axios.create({
  baseURL: 'https://goose-track-backend-68sm.onrender.com/api',
});

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { tasksByCurrentMonth } = await gooseApi.get('/tasks');
      return tasksByCurrentMonth;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (newTask, thunkAPI) => {
    try {
      const { data } = await gooseApi.post('/tasks', { ...newTask });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeTask = createAsyncThunk(
  'tasks/removeTask',
  async (taskId, thunkAPI) => {
    try {
      const { data } = await gooseApi.delete(`/tasks/${taskId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ taskId, updatedTask }, thunkAPI) => {
    try {
      const { data } = await gooseApi.delete(`/tasks/${taskId}`, {
        ...updatedTask,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
