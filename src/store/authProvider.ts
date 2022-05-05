import { TUser } from '@/types';
import { storage } from '@/utils';

const apiUrl = process.env.REACT_APP_API_URL;
const { clearToken, setToken } = storage;

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

export const getToken = storage.getToken;
