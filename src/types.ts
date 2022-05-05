import { ReactElement } from 'react';
import store from '@/store';

export type ErrOrNul = Error | null;

export interface TOBj {
  [key: string]: any;
}

export type TErrorFallback = (props: {
  error: ErrOrNul;
}) => ReactElement;

// Redux
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

// Login
export interface TUser {
  username: string;
  password: string;
  token: string;
}

// Auth
export interface TAuth {
  user: TUser | null;
  login: (user: TUser, callback?: VoidFunction) => void;
  logout: (callback?: VoidFunction) => void;
  register: (user: TUser, callback?: VoidFunction) => void;
}

export type EleOrNul = ReactElement | null;

export interface AuthForm {
  username: string;
  password: string;
}
