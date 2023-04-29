
import { configureStore } from '@reduxjs/toolkit';
import { authInitState } from './auth/auth.init-state';
import { authReducer } from './auth/authSlice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { userReducer } from "./user/userSlice";
import { userInitialState } from './user/user.init-state';

const initState = {
  auth: authInitState,
  user: userInitialState
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);






