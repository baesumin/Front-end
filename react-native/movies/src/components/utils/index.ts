export const trimText = (text: string, limit: number) => {
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

export const formatDate = (date: string | number | Date) => {
  const theDate = new Date(date);
  return theDate.toLocaleDateString('ko', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};
