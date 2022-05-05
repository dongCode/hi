import { createSlice } from '@reduxjs/toolkit';
import { AuthForm, RootDispatch, RootState, TUser } from '@/types';
import * as auth from '@/store/authProvider';

interface State {
  user: TUser | null;
}

const initialState: State = {
  user: null,
};

export const initUser = async () => {
  let user = null;
  const token = auth.getToken();
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
    auth.login(form).then((user: TUser) => dispatch(setUser(user)));
  };
};

export const register = (form: AuthForm) => {
  return (dispatch: RootDispatch) =>
    auth
      .register(form)
      .then((user: TUser) => dispatch(setUser(user)));
};

export const logout = () => {
  return (dispatch: RootDispatch) =>
    auth.logout().then(() => dispatch(setUser(null)));
};

export const init = () => {
  return (dispatch: RootDispatch) =>
    initUser().then((user: TUser | null) => dispatch(setUser(user)));
};

export default authSlice.reducer;
