// const BASE_URL = 'https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev';

const cache = {};

export const request = async (url, options = {}) => {
  if (cache[url]) {
    return cache[url];
  }

  try {
    const fullUrl = url;
    const response = await fetch(fullUrl, options);

    if (response.ok) {
      const json = await response.json();
      cache[url] = json;
      return json;
    }
    throw new Error('API 통신 실패');
  } catch (e) {
    alert(e.message);
  }
};
