import { configureStore } from '@reduxjs/toolkit';
import { authInitState } from './auth/auth.init-state';
import { tasksInitState } from './tasks/tasks.init-state';
import { authReducer } from './auth/authSlice';
import { userReducer } from './user/userSlice';
import { tasksReducer } from './tasks/taskSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const initState = {
  auth: authInitState,
  tasks: tasksInitState,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    auth: authReducer,
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
