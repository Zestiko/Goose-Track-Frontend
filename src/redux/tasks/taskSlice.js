import { addTask, fetchTasks, removeTask, updateTask } from './tasksOperations';
import { STATUS } from '../../constants/status.constants';
import { tasksInitState } from './tasks.init-state';
const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.status = STATUS.loading;
};

const handleRejected = (state, action) => {
  state.status = STATUS.error;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(addTask.pending, handlePending)
      .addCase(updateTask.pending, handlePending)
      .addCase(removeTask.pending, handlePending)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.rejected, handleRejected)
      .addCase(updateTask.rejected, handleRejected)
      .addCase(removeTask.rejected, handleRejected)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = STATUS.success;
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.status = STATUS.success;
        state.tasks.push(action.payload.task);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.status = STATUS.success;
        const idx = state.tasks.findIndex(
          task => task._id === action.payload.task._id
        );
        state.tasks[idx] = action.payload.task;
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.status = STATUS.success;
        const idx = state.tasks.findIndex(
          task => task._id === action.payload._id
        );

        state.tasks.splice(idx, 1);
      }),
});

export const { setDate, setFilter } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
