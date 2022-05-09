import { TUser } from './types';
import { clearToken, setToken } from '@/features/auth/storage';
import { apiUrl } from '@/features/auth/constants';

export const handleUserResponse = ({ user }: { user: TUser }) => {
  setToken(user.token || '');
  return user;
};

export const login = (data: {
  username: string;
  password: string;
}) => {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async response => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const register = (data: {
  username: string;
  password: string;
}) => {
  return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async response => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const logout = async () => clearToken();
