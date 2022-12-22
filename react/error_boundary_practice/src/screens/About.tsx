import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../components/axios';

export default function About() {
  const { data } = useQuery(['api'], async () => {
    const { data } = await axiosInstance.get(
      'https://jsonplacehoalder.typicode.com/todos/1'
    );
    return data;
  });
  console.log(data);

  return <div style={{ backgroundColor: 'pink', height: 300 }}>{data?.title}</div>;
}
