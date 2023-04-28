import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist";
import {
    fetchUser,
    updateUserProfile
} from "./user-operations";
import { userInitialState } from "./user.init-state";


const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    extraReducers: builder => {
        builder
            .addCase(fetchUser.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(updateUserProfile.pending, state => {
                return { ...state, isLoading: true, error: null };
            })
            .addCase(updateUserProfile.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    user: [...state.user, payload],
                    isLoading: false,
                    error: null,
                };
            })
            .addCase(updateUserProfile.rejected, (state, { payload }) => {
                return { ...state, isLoading: false, error: payload };
            })
    }
})

const persistConfig = {
    key: 'auth',
    storage
};

export const userReducer = persistReducer(persistConfig,userSlice.reducer)