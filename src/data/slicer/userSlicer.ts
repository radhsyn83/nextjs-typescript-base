import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { BaseModel } from '../models/default.model';
import { IUser, User } from '../models/user.model';
import { apiService } from '../services';
import { RootState } from '../store';

const initialState: IUser = {
  loading: false,
  error: '',
};

export const login = createAsyncThunk('login', async (body: any) => {
  const res = await apiService
    .POST('user/login_or_register', body)
    .catch((e) => console.log(e, 'error'));
  return res;
});

export const getProfile = createAsyncThunk('getProfile', async () => {
  const res = await apiService
    .GET('user/profile')
    .catch((e) => console.log(e, 'error'));
  return res;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      console.log('loading...');
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<BaseModel<User>>) => {
        const jwt = action.payload.result?.token_jwt ?? '';
        state.loading = false;
        Cookies.set('token', jwt);
        Router.push('/');
      }
    );
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? '';
    });
    //getProfile
    builder.addCase(getProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getProfile.fulfilled,
      (state, action: PayloadAction<BaseModel<User>>) => {
        state.loading = false;
        state.profile = action.payload.result;
      }
    );
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? '';
    });
  },
  reducers: {},
});

export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
