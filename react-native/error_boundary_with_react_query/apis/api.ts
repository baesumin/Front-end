import axios from 'axios';
import { checkIsAxiosError, checkIsNetworkError } from './checkErrorType';

const api = axios.create({
  baseURL: 'http://localhost:3001'
});

api.interceptors.response.use(onFulfilled, onRejected);

function onFulfilled(response: any) {
  return response;
}

function onRejected(error: Error) {
  console.log('onRejected: ' + error);

  return new Promise((_, reject) => {
    if (checkIsAxiosError(error) && checkIsNetworkError(error)) {
      setTimeout(() => reject(error), 200);
    } else {
      reject(error);
    }
  });
}

export default api;
