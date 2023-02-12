import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import api from '../../apis/api';
import { queryKeys } from '../../constants/queryKeys';
import { delay } from '../../utils/delay';

type PostsProps = {
  id: number;
  title: string;
  author: string;
}[];

export function usePosts(
  options?: UseQueryOptions<AxiosResponse<PostsProps, any>, unknown, PostsProps, any[]>
) {
  return useQuery(
    [queryKeys.POSTS_DATA],
    async () => {
      // await delay(2000);
      return api.get<PostsProps>('/posts');
    },
    {
      ...options
    }
  );
}
