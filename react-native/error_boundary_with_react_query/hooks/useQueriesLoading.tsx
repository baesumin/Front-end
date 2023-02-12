import react, { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export function useQueriesLoading() {
  const client = useQueryClient();
  const queries = client.getQueryCache().findAll();

  const [queryChangedCount, setQueryChangedCount] = useState(0);

  useEffect(() => {
    if (queries) {
      setQueryChangedCount(queries.length);
    }
  }, []);

  useEffect(() => {
    if (
      queries.every(({ state }) => state.status !== 'loading') &&
      queryChangedCount >= 0
    ) {
      setQueryChangedCount((prevState) => prevState - 1);
    }
  });

  if (queryChangedCount < 0) {
    return false;
  }

  return true;
}
