// storage.js
export const storage = localStorage;

export const getItem = (key, defaultValue) => {
  try {
    const value = storage.getItem(key);
    // key에 해당하는 값이 있다면 parsing하고, 없으면 defaultValue 리턴
    return value ? JSON.parse(value) : defaultValue;
  } catch {
    // parsing 하다 에러가 생기면 defaultValue 리턴
    return defaultValue;
  }
};

export const setItem = (key, value) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore
  }
};

export const removeItem = (key) => {
  try {
    storage.removeItem(key);
  } catch {
    // ignore
  }
};
