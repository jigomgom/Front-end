import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import axios from "axios";

const SERVER_URL = "http://13.124.223.73/api";

// DB에서 모든 Feed 가져오기
export const getFeedLists = createAsyncThunk("GET/getFeedLists", async () => {
  return await axios
    .get(`${SERVER_URL}/stores`, {})
    .then((response) => response.data.storeList);
});

// Feed에 ID 값으로 삭제하기
export const deleteFeedLists = createAsyncThunk(
  "DELETE/deleteFeedLists",
  async (args) => {
    let result;
    const Token = localStorage.getItem("access_token");
    await axios
      .delete(`${SERVER_URL}/store/${args}`, {
        headers: { Authorization: `${Token}` },
      })
      .then((response) => {
        if (response.data.response) {
            // response가 true일 때, id 값을 넘기려고 했는데 계속 오류가 생겼습니다.
            // 외부에 변수를 선언해주고 return 하는 방식을 사용했습니다.
            // 몇가지 문서를 찾아보니 callback 함수를 사용하라고 하는데 방법을 잘 모르겠네요.
          result = true;
        } else {
            console.log( response );
          if (response.data.message === "본인의 게시글이 아닙니다.") {
            window.alert("It's not your feed");
          }else if( response.data.message === "로그인이 필요합니다." ){
            window.alert("Login is required.");
          }
        }
      })
      .catch((err) => console.log(err));

    if (result) {
      return args;
    }
    // return args.index;
  }
);

const FeedSlice = createSlice({
  name: "Feed",
  initialState: {
    isLogin: false,
    list: [{}],
  },
  reducers: {
    // Login State를 관리하기 위한 일반 Reducer 함수입니다.
    // 로그인 상태를 확인하고 보내실 떄는 localStorage.getItem("loginState")으로 가져오면 됩니다.
    changeLoginState: (state, action) => {
      // 그냥 true false를 localStorage에 넣으면 String으로 변환됩니다.
      // JSON.parse를 쓸때는 true, false 값만 들어가게 하고
      // TRUE, FALSE 일 때는 변환을 안하니 주의합니다.
      const loginState = JSON.parse(action.payload);
      state.isLogin = loginState;
    },
  },
  extraReducers: {
    // middlewares
    [getFeedLists.fulfilled]: (state, action) => {
      console.log("Get fullfill");
      // console.log( current( state.list ) );
      // console.log( action.payload );
      state.list = [...action.payload];
    },
    [getFeedLists.rejected]: (state, action) => {
      console.log("Get reject");
    },
    [deleteFeedLists.fulfilled]: (state, action) => {
      if (action.payload) {
        const lists = current(state.list).filter((item, index) => {
          return item.id !== action.payload;
        });
        console.log("Delete fullfill");
        state.list = lists;
      }
    },
    [deleteFeedLists.rejected]: (state, action) => {
      console.log("Delete reject");
    },
  },
});

export const { changeLoginState, deleteFeedState } = FeedSlice.actions;
export default FeedSlice.reducer;
