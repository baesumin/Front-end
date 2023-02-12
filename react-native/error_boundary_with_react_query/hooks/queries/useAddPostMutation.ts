import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import api from '../../apis/api';
import { queryKeys } from '../../constants/queryKeys';

type postProps = {
  title: string;
  author: string;
};

export function useAddPostMutation(): UseMutationResult<
  postProps,
  AxiosError,
  postProps,
  unknown
> {
  const queryClient = useQueryClient();
  return useMutation(
    ({ title, author }) =>
      api.post(queryKeys.POSTS_DATA, {
        title: title,
        author: author
      }),
    {
      onMutate: async (newTodo) => {
        await queryClient.cancelQueries([queryKeys.POSTS_DATA]);

        const previousTodos = queryClient.getQueryData([queryKeys.POSTS_DATA]);
        console.log(previousTodos);

        queryClient.setQueryData<postProps[]>([queryKeys.POSTS_DATA], (oldData) => [
          ...(oldData as postProps[]),
          newTodo
        ]);

        return { previousTodos };
      },
      onError: (error, newTodo, context) => {
        console.log(error);
        console.log(newTodo);
        queryClient.setQueryData([queryKeys.POSTS_DATA], context?.previousTodos);
      },
      onSettled: () => {
        queryClient.invalidateQueries([queryKeys.POSTS_DATA]);
      }
    }
  );
}
