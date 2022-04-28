import { useRef, useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { useMount } from './hooks';

export const uId = uuidV4;

const getDataPropFromPath = (data: any, keyPath: any) => {
  if (!keyPath) {
    return data;
  }
  if (!/(\w+\.)*\w+$/.test(keyPath)) {
    return undefined;
  }
  const keys = keyPath.split('.');
  while (keys.length) {
    if (!data) return undefined;
    const key = keys.shift();
    if (key != null) {
      data = data[key];
    }
  }

  return data;
};

const stringify = (a: any) => {
  try {
    return JSON.stringify(a, null, 2);
  } catch (error) {
    console.error(error, 'stringify');
  }
};

export const isFunc = (fn: unknown) => {
  return typeof fn === 'function';
};

export const useDocumentTitle = (
  key: string,
  initTitle: string,
  keepOnUnmount = true,
) => {
  const oldTitle = useRef(initTitle).current;

  const [title, setTitle] = useState(initTitle);

  useEffect(() => {
    document.title = title;
    if (localStorage[key] !== title) {
      localStorage.setItem(key, title);
    }
  }, [title, key]);
  useEffect(() => {
    setTitle(initTitle);
  }, [initTitle]);
  useMount(() => {
    window.addEventListener('storage', event => {
      if (event.key === key) {
        setTitle(event.newValue as string);
      }
    });
  });
  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        // 如果不指定依赖，读到的就是旧title
        document.title = oldTitle;
      }
    };
  }, [keepOnUnmount, oldTitle]);
  return [title];
};

export { getDataPropFromPath, stringify };
