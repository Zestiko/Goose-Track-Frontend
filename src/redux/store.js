import { configureStore } from '@reduxjs/toolkit';
import { initState } from './store.init-state';
import { userReducer } from './user/userSlice';
import { tasksReducer } from './tasks/taskSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

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
