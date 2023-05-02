import { createAsyncThunk } from '@reduxjs/toolkit';
import { publicApi, token } from 'http/http';
import { setDate } from './taskSlice';
import { Notify } from 'notiflix';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (date, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.user.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
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
      await thunkAPI.dispatch(setDate(month));
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
      Notify.success('Success.Task added');
      return data;
    } catch (error) {
      Notify.error('Error.Something gone wrong.');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeTask = createAsyncThunk(
  'tasks/removeTask',
  async (taskId, thunkAPI) => {
    try {
      const { data } = await publicApi.delete(`/tasks/${taskId}`);
      Notify.success('Success.Task removed');

      return data;
    } catch (error) {
      Notify.error('Error.Something gone wrong.');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ taskId, updatedTask }, thunkAPI) => {
    try {
      const { data } = await publicApi.patch(`/tasks/${taskId}`, {
        ...updatedTask,
      });
      Notify.success('Success.Task updated.');

      return data;
    } catch (error) {
      Notify.error('Error.Something gone wrong.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
