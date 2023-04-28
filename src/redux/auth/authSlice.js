import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import Notiflix from 'notiflix';
import { authInitState } from './auth.init-state';
import { authLoginThunk, authLogoutThunk, authRegisterThunk } from './auth.thunk';
import { STATUS } from 'constants/status.constants';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(authLoginThunk.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.user = payload.newUser;
        state.token = payload.token;
        state.isLoggedIn = true;
        Notiflix.Notify.info('Welcome to your virtual Planing Calendar');
      })
      .addCase(authLoginThunk.rejected, state => {
        state.status = STATUS.error;
        Notiflix.Notify.warning('Your email or password were wrong');
      })
      .addCase(authRegisterThunk.fulfilled, (state, { payload }) => {
        state.user = payload.newUser;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.status = STATUS.success;
      })
      .addCase(authLogoutThunk.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.status = STATUS.success;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
