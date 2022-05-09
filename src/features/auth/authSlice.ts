import { createSlice } from '@reduxjs/toolkit';
import { AuthForm, TUser } from './types';
import * as authAPI from '@/features/auth/api';
import { getToken } from '@/features/auth/storage';
import { RootDispatch, RootState } from '@/store/types';

interface State {
  user: TUser | null;
}

const initialState: State = {
  user: null,
};

export const initUser = async () => {
  let user = null;
  const token = getToken();
  if (token) {
    // 获取信息
  }
  return user;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

const { setUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export const login = (form: AuthForm) => {
  return (dispatch: RootDispatch) => {
    authAPI
      .login(form)
      .then((user: TUser) => dispatch(setUser(user)));
  };
};

export const register = (form: AuthForm) => {
  return (dispatch: RootDispatch) =>
    authAPI
      .register(form)
      .then((user: TUser) => dispatch(setUser(user)));
};

export const logout = () => {
  return (dispatch: RootDispatch) =>
    authAPI.logout().then(() => dispatch(setUser(null)));
};

export const init = () => {
  return (dispatch: RootDispatch) =>
    initUser().then((user: TUser | null) => dispatch(setUser(user)));
};

export default authSlice.reducer;
