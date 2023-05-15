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
      await thunkAPI.dispatch(fetchTasks(month));
      thunkAPI.dispatch(setDate(month));
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

// export const fetchTasksOnDateChange = store => next => action => {
//   const result = next(action);
//   if (action.type === chosedDateAction.type) {
//     const currenChoosedMonth = moment(action.payload).format('YYYY-MM');
//     const monthFromSate = moment(store.getState().tasks.date).format('YYYY-MM');
//     currenChoosedMonth !== monthFromSate &&
//       store.dispatch(changeMonth(currenChoosedMonth));
//   }
//   return result;
// };
