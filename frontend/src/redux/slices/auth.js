import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
/*  Auth service APIs */
import AuthService from "../services/auth";
import { setMessage } from "./message";

/* UserLogin Slice */
export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.userLogin(email, password);
      thunkAPI.dispatch(setMessage(data.message));
      return data.docs;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

/* userRegister Slice */
export const userRegister = createAsyncThunk(
  "user/register",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const data = await AuthService.userRegister(name, email, password);
      thunkAPI.dispatch(setMessage(data.message));
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const handleLogout = createAsyncThunk(
  "user/logout",
  async (thunkAPI) => {
    try {
      thunkAPI.dispatch(clearMessage());
      thunkAPI.dispatch(setMessage("Logout successfully"));
    } catch (error) {
      console.log(error, "error during logout")
    }
  })


/* Auth initiakState */
const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
  user: null,
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.isLoader = true;
      state.user = null;
    },
    [userLogin.rejected]: (state) => {
      state.isLoader = false;
      state.user = null;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.isLoader = false;
      state.user = action.payload;
    },
    [userRegister.pending]: (state) => {
      state.isLoader = true;
      state.user = null;
    },
    [userRegister.rejected]: (state) => {
      state.isLoader = false;
      state.user = null;
    },
    [userRegister.fulfilled]: (state, action) => {
      state.isLoader = false;
      state.user = null;
    },
    [handleLogout.fulfilled]: (state, action) => {
      state.isLoader = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
