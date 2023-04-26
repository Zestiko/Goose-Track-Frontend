import { createSlice } from "@reduxjs/toolkit";
import {
    fetchUser,
    updateUserProfile
} from "./user-operations"

const userInitialState = {
  user: {},
  isLoading: false,
  error: null,
};

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

export const userReducer = userSlice.reducer;