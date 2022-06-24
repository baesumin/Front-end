const BASE_URL = 'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev';

const cache = {};

const request = async (url, options = {}) => {
  if (cache[url]) {
    return cache[url];
  }

  try {
    const fullUrl = `${BASE_URL}${url}`;
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

export const fetchLanguages = async (keyword) => request(`/languages?keyword=${keyword}`);
