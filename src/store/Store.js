import { configureStore } from "@reduxjs/toolkit";
import FeedSlice from "../redux/modules/feedSlice";

const store = configureStore({
    reducer:{
        Feed: FeedSlice,
    },
});

export default store;