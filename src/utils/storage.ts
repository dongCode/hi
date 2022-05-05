const storageTokenPrefix = '_auth_storage_token_';
const storage = {
  getToken: () => {
    return JSON.parse(
      window.localStorage.getItem(`${storageTokenPrefix}`) as string,
    );
  },
  setToken: (token: string) => {
    window.localStorage.setItem(
      `${storageTokenPrefix}`,
      JSON.stringify(token),
    );
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storageTokenPrefix}`);
  },
};

export default storage;
