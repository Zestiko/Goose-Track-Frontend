import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicApi } from 'http/http';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (date, thunkAPI) => {
    try {
      const { data } = await publicApi.get(`/tasks`, { params: { date } });
      return data.tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const changeMonth = createAsyncThunk(
  'month/changeMonth',
  async (month, thunkAPI) => {
    try {
      const response = await thunkAPI.dispatch(fetchTasks(month));
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (newTask, thunkAPI) => {
    try {
      const { data } = await publicApi.post('/tasks', { ...newTask });
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
      const { data } = await publicApi.delete(`/tasks/${taskId}`);
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
      const { data } = await publicApi.delete(`/tasks/${taskId}`, {
        ...updatedTask,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
