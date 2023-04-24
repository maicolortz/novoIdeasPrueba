import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  sessionSlice.actions;

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      dispatch(loginStart());
      const data = {
        user: username,
        password: password,
      };
      const response = await axios.post(
        " https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing",
        data
      );
      console.log(response);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.log("login fallido");
    }
  };

export default sessionSlice.reducer;
