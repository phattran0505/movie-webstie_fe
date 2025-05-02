import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    registerStart: (state) => {
      state.isLoading = true;
    },
    registerSuccess: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = false;
    },
    registerFailure: (state) => {
      state.error = true;
    },
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = false;
    },
    loginFailure: (state) => {
      state.isLoading = true;
      state.error = true;
    },
    logoutStart:(state)=>{
      state.isLoading = true;
      state.error = false;
    },
    logoutSuccess: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = false;
    },
    logoutFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} = authSlice.actions;
export default authSlice.reducer;
