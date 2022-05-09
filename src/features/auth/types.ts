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

export interface AuthForm {
  username: string;
  password: string;
}
