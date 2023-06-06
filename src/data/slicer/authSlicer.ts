import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { IAuthState, User } from '../models/auth.models';
import { apiService } from '../services';
import { RootState } from '../store';

const initialState: IAuthState = {
  loading: false,
  error: '',
};

export const login = createAsyncThunk('login', async (body: any) => {
  const res = await apiService.POST('https://dummyjson.com/auth/login', body);
  return res;
});

const authSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      console.log('loading...');
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
      Cookies.set('token', action.payload.token);
      Router.push('/');
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.user = undefined;
      state.error = action.error.message ?? '';
    });
  },
  reducers: {},
});

export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;
