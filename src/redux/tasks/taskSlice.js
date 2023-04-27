import { addTask, fetchTasks, removeTask, updateTask } from "./tasksOperations";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tasks:[], 
    isLoading: false, 
    error:null
};

const handlePending = (state) => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => 
    builder
    .addCase(fetchTasks.pending, handlePending)
    .addCase(addTask.pending, handlePending)
    .addCase(updateTask.pending, handlePending)
    .addCase(removeTask.pending, handlePending)
    .addCase(fetchTasks.rejected, handleRejected)
    .addCase(addTask.rejected, handleRejected)
    .addCase(updateTask.rejected, handleRejected)
    .addCase(removeTask.rejected, handleRejected)
    .addCase(fetchTasks.fullfilled, (state, action)=>{
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
    })
    .addCase(addTask.fullfilled, (state, action)=>{
        state.isLoading = false;
        state.error = null;
        state.tasks.push(action.payload);

    })
    .addCase(updateTask.fullfilled, (state, action)=>{
        state.isLoading = false;
        state.error = null;
        const idx = state.tasks.findIndex((task)=> task.id === action.payload.id)
        state.tasks.splice(idx,1,action.payload);
    })
    .addCase(removeTask.fullfilled, (state, action)=>{
        state.isLoading = false;
        state.error = null;
        const idx = state.tasks.findIndex((task)=> task.id === action.payload.id)
        state.tasks.splice(idx,1);

    })
})

export const tasksReducer = tasksSlice.reducer;