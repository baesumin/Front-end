export const makeImgPath = (img: string, width: string = 'w500') => {
  return `https://image.tmdb.org/t/p/${width}${img}`;
};
