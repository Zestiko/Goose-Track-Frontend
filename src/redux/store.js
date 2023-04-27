import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/userSlice';
import { tasksReducer } from './tasks/taskSlice';
import { choosedDateReducer } from './tasks/choosedDateSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
    choosedDate: choosedDateReducer,
  },
});
