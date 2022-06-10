import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";


const FeedSlice = createSlice({
    name: "Feed",
    initialState :{
        list:[{
            name : "",
        }],
    },
    reducers:{

    },
    extraReducers:{
        // middlewares
    },
});

export default FeedSlice.reducer; 