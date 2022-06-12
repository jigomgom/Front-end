import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";


const FeedSlice = createSlice({
    name: "Feed",
    initialState :{
        isLogin: false,
        list:[{
            name : "",
        }],
    },
    reducers:{
        changeLoginState: ( state, action ) => {
            // 그냥 true false를 localStorage에 넣으면 String으로 변환됩니다.
            // JSON.parse를 쓸때는 true, false 값만 들어가게 하고
            // TRUE, FALSE 일 때는 변환을 안하니 주의합니다.
            const loginState = JSON.parse( action.payload );
            state.isLogin = loginState;
        },
    },
    extraReducers:{
        // middlewares
    },
});

export const { changeLoginState } = FeedSlice.actions;
export default FeedSlice.reducer; 