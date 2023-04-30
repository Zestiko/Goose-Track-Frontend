import { configureStore } from '@reduxjs/toolkit';
import { tasksInitState } from './tasks/tasks.init-state';
import { userReducer } from './user/userSlice';
import { tasksReducer } from './tasks/taskSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { userInitialState } from './user/user.init-state';




const initState = {
  user: userInitialState,
  tasks: tasksInitState,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {

    user: userReducer,
    tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
