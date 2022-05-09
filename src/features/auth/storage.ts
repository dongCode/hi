const storageTokenPrefix = '_auth_storage_token_';
const localStorage = window.localStorage;

export const getToken = () => {
  return JSON.parse(
    localStorage.getItem(`${storageTokenPrefix}`) as string,
  );
};

export const setToken = (token: string) => {
  localStorage.setItem(
    `${storageTokenPrefix}`,
    JSON.stringify(token),
  );
};

export const clearToken = () => {
  localStorage.removeItem(`${storageTokenPrefix}`);
};
