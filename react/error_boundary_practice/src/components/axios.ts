import Axios from 'axios';
import { checkIsAxiosError, checkIsNetworkError } from './apis/checkErrorType';

const axiosInstance = Axios.create({
  baseURL: ''
});

axiosInstance.interceptors.response.use(onFulfilled, onRejected);

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

export default axiosInstance;
