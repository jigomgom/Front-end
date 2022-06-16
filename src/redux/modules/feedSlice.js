import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import axios from "axios";

const SERVER_URL = "http://13.124.223.73/api";

// DB에서 모든 Feed 가져오기
export const getFeedLists = createAsyncThunk("GET/getFeedLists", async () => {
  const userUID = localStorage.getItem("user_uid");

  if (userUID !== null) {
    return await axios
      .get(`${SERVER_URL}/stores/${userUID}`, {})
      .then((response) => response.data);
  } else {
    return await axios
      .get(`${SERVER_URL}/stores/0`, {})
      .then((response) => response.data);
  }
});

// 무한 스크롤을 위해 DB에 다시 요청하기
export const getFeedListMore = createAsyncThunk(
  "GET/getFeedListsMore",
  async (args) => {
    console.log(args);
    const userUID = localStorage.getItem("user_uid");
    //listLength: 9, totalListlen: 26
    const pageNumber = parseInt(args.listLength / 9);
    if (args.listLength !== args.totalListlen) {
      if (userUID !== null) {
        return await axios
          .get(`${SERVER_URL}/stores/${userUID}`, {
            params: {
              page: String(pageNumber),
            },
          })
          .then((response) => response.data);
      } else {
        return await axios
          .get(`${SERVER_URL}/stores/0`, {
            params: {
              page: String(pageNumber),
            },
          })
          .then((response) => response.data);
      }
    }
  }
);

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
          console.log(response);
          if (response.data.message === "본인의 게시글이 아닙니다.") {
            window.alert("It's not your feed");
          } else if (response.data.message === "로그인이 필요합니다.") {
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

// Feed 추가하기 -> uploadFeedFB
export const uploadFeed = createAsyncThunk("POST/uploadFeed", async (Feed) => {
  const FeedData = {
    storeName: Feed.storeName,
    address: Feed.address,
    menu: Feed.menu,
    img_url: Feed.img_url,
    stars: Feed.stars,
    comment: Feed.comment,
  };
  console.log(FeedData);

  await axios
    .post(`${SERVER_URL}/store`, FeedData, {
      headers: { Authorization: Feed.token },
    })
    .then((response) => {
      console.log(response);
    });

  return FeedData;
});

// Feed 수정하기 -> editFeedFB
export const editFeed = createAsyncThunk("PUT/editFeed", async (Feed) => {
  const FeedData2 = {
    storeName: Feed.storeName,
    address: Feed.address,
    menu: Feed.menu,
    img_url: Feed.img_url,
    stars: Feed.stars,
    comment: Feed.comment,
  };
  console.log(FeedData2);

  await axios
    .put(`${SERVER_URL}/store/${Feed.id}`, FeedData2, {
      headers: { Authorization: Feed.token },
    })
    .then((response) => {
      console.log(response);
    });

  return Feed;
});

// Feed Heart increate
export const increaseFeedHeart = createAsyncThunk(
  "POST/increaseFeedHeart",
  async (Feed) => {
    let result;
    let LikeCnt = 0;
    await axios
      .post(
        `${SERVER_URL}/like/${Feed.id}`,
        {},
        { headers: { Authorization: `${Feed.token}` } }
      )
      .then((res) => {
        if (res.data.response) {
          console.log(res.data);
          result = true;
          LikeCnt = res.data.likeCount;
        }
      })
      .catch((e) => console.log(e));
    if (result) {
      Feed["LikeCnt"] = LikeCnt;
      console.log(Feed);
      return Feed;
    }
  }
);

// Feed Heart decrease
export const decreaseFeedHeart = createAsyncThunk(
  "DELETE/editFeed",
  async (Feed) => {
    let result;
    let LikeCnt = 0;
    console.log(Feed);
    await axios
      .delete(`${SERVER_URL}/unlike/${Feed.id}`, {
        headers: { Authorization: `${Feed.token}` },
      })
      .then((res) => {
        if (res.data.response) {
          console.log(res.data);
          result = true;
          LikeCnt = res.data.likeCount;
        }
      })
      .catch((e) => console.log(e));
    if (result) {
      Feed["LikeCnt"] = LikeCnt;
      console.log(Feed);
      return Feed;
    }
  }
);

const FeedSlice = createSlice({
  name: "Feed",
  initialState: {
    isLogin: false,
    isLength: 0,
    userinfo: {
      UserId: 0,
      nickname: "",
      icon_url: "",
    },

    list: [{}],
  },
  reducers: {
    // Login State를 관리하기 위한 일반 Reducer 함수입니다.
    // 로그인 상태를 확인하고 보내실 떄는 localStorage.getItem("loginState")으로 가져오면 됩니다.
    changeLoginState: (state, action) => {
      // 그냥 true false를 localStorage에 넣으면 String으로 변환됩니다.
      // JSON.parse를 쓸때는 true, false 값만 들어가게 하고
      // TRUE, FALSE 일 때는 변환을 안하니 주의합니다.

      const loginState = action.payload?.loginState;
      const userInfo_ID = action.payload?.userinfo?.id;
      const userInfo_ICON = action.payload?.userinfo?.icon_url;
      const userInfo_NICK = action.payload?.userinfo?.nickname;

      if (loginState && loginState.length > 0) {
        state.isLogin = JSON.parse(loginState);
      }

      state.isLogin = loginState;
      state.userinfo.UserId = userInfo_ID;
      state.userinfo.icon_url = userInfo_ICON;
      state.userinfo.nickname = userInfo_NICK;
    },
  },
  extraReducers: {
    // middlewares

    //getFeedLists
    [getFeedLists.fulfilled]: (state, action) => {
      console.log("Get fullfill");
      state.isLength = action.payload.total;
      state.list = [...action.payload.storeList];
    },
    [getFeedLists.rejected]: (state, action) => {
      console.log("Get reject");
    },

    // getFeedListMore
    [getFeedListMore.fulfilled]: (state, action) => {
      console.log("Get more list fulfill ", action.payload);
      // state.isLastPage = action.payload.isLast;
      // if( !action.payload.isLast ){
      if (action.payload) {
        state.list = [...state.list, ...action.payload.storeList];
      }
      // }
      // console.log(action.payload);
    },
    [getFeedListMore.rejected]: (state, action) => {},

    //uploadFeed
    [uploadFeed.fulfilled]: (state, action) => {
      console.log("Upload fullfill");
      console.log(action.payload);
      state.list = [...state.list, action.payload];
    },
    [uploadFeed.rejected]: (state, action) => {
      console.log("Upload reject");
    },

    //editFeed
    [editFeed.fulfilled]: (state, action) => {
      console.log("Edit fullfill");
      // console.log(action.payload);
      const new_list = current(state.list).filter(
        (item) => item.id !== action.payload
      );
      console.log(new_list);
      state.list = new_list;
    },

    [editFeed.rejected]: (state, action) => {
      console.log("Edit reject");
    },

    //deleteFeedLists
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

    // Update Herat State
    [increaseFeedHeart.fulfilled]: (state, action) => {
      console.log("increase heart fulfill");
      const lists = current(state.list).map((item, index) => {
        // console.log( item );
        if (item.id === action.payload.id) {
          return { ...item, like: true, likeCount: action.payload.LikeCnt };
        } else {
          return item;
        }
      });
      state.list = lists;
    },
    [increaseFeedHeart.rejected]: (state, action) => {
      console.log("increase heart reject");
    },
    [decreaseFeedHeart.fulfilled]: (state, action) => {
      console.log("increase heart fulfill");
      const lists = current(state.list).map((item, index) => {
        console.log(item);
        if (item.id === action.payload.id) {
          return { ...item, like: false, likeCount: action.payload.LikeCnt };
        } else {
          return item;
        }
      });
      state.list = lists;
    },
    [decreaseFeedHeart.rejected]: (state, action) => {
      console.log("Decrease reject");
    },
  },
});

export const { changeLoginState } = FeedSlice.actions;
export default FeedSlice.reducer;
