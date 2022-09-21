import { useContext } from 'react';
import { CountContext } from '../contexts/Count';

export const CountLabel = () => {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
};