// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/OtherComponents/userSlice.jsx";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
