import InfiniteScroll from 'react-infinite-scroller';

import { useInfiniteQuery } from 'react-query';

import { Person } from './Person';

const initialUrl = 'https://swapi.dev/api/people/';
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'sw-people',
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    {
      getNextPageParam: lastPage
    }
  );

  // TODO: get data for InfiniteScroll via React Query
  return <InfiniteScroll />;
}
