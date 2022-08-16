import type { GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient, useQuery, useQueryClient } from "react-query";
import { exampleApi } from "../libs/apis";
import { useAppDispatch, useAppSelector } from "../store";
import counterSlice from "../store/slices/counter";

const Home: NextPage = () => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);
  const { data } = useQuery("posts", exampleApi.getData);

  const increaseCount = () => {
    dispatch(counterSlice.actions.increase);
  };

  const increaseCountByAmount = () => {
    dispatch(counterSlice.actions.increaseByAmount(Math.random() * 100));
  };

  const decreaseCount = () => {
    dispatch(counterSlice.actions.decrease());
  };

  return (
    <div>
      <div>{value}</div>
      <button onClick={increaseCount}>+1</button>
      <button onClick={increaseCountByAmount}>+increase</button>
      <button onClick={decreaseCount}>-decrease</button>
      <button
        className="bg-slate-300 active:bg-slate-600"
        onClick={() => queryClient.refetchQueries("posts")}
      >
        데이터 패칭
      </button>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("posts", exampleApi.getData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
