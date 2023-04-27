import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    // privateApi,
    publicApi,
    token
} from "http/http";

export const authLoginThunk = createAsyncThunk('login', async (values, thunkAPI) => {
    try {
        const { data } = await publicApi.post('/login', values);
        token.set(data.token);
        return data;

    } catch (error) {
        return thunkAPI.rejectWithValue('Sorry, something went wrong');
    }

});

// export const authRegisterThunk = createAsyncThunk('register', async (values, thunkAPI) => {

//     try {
//         const { data } = await privateApi.post('/register', values);
//         token.set(data.token);
//         // console.log(data);
//         return data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue('Sorry, something went wrong');
//     }

// })
