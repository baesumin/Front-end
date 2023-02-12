export const checkIsAxiosError = (error: any) => {
  return error?.message === 'Network Error' ? true : false;
};
export const checkIsNetworkError = (error: any) => {
  return error?.message === 'Network Error' ? true : false;
};
