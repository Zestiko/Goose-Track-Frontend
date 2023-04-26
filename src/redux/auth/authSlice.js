import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import Notiflix from "notiflix";
import { authInitState } from "./auth.init-state";
import { authLoginThunk } from "./auth.thunk";
import { STATUS } from "constants/status.constants";

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    extraReducers: builder => {
        builder.addCase(authLoginThunk.pending, state => {
            state.status = STATUS.loading;
        }).addCase(authLoginThunk.fulfilled, (state, { payload }) => {
            state.status = STATUS.success;
            state.values = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
            Notiflix.Notify.info('Welcome to your virtual Planing Calendar');
        }).addCase(authLoginThunk.rejected, state => {
            state.status = STATUS.error;
            Notiflix.Notify.warning('Your email or password were wrong');
        })
    }
});

const persistConfig = {
    key: 'auth',
    storage
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);