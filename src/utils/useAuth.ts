import { useCallback } from 'react';
import { useStoreDispatch, useStoreSelector } from '@/utils';
import * as authStore from '@/store/authSlice';
import { TAuth, TUser } from '@/types';

function useAuth() {
  const dispatch: (...args: unknown[]) => Promise<TUser> =
    useStoreDispatch();

  const user = useStoreSelector(authStore.selectUser);

  const login = useCallback(
    (user: TUser) => dispatch(authStore.login(user)),
    [dispatch],
  );

  const register = useCallback(
    (user: TUser) => dispatch(authStore.register(user)),
    [dispatch],
  );

  const logout = useCallback(
    () => dispatch(authStore.logout()),
    [dispatch],
  );

  const value: TAuth = { user, login, logout, register };

  return value;
}

export default useAuth;
