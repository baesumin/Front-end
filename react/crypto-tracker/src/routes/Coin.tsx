import React from 'react';
import { useParams } from 'react-router';

interface RouteParams {
  coinId: string;
}

export default function Coin() {
  const { coinId } = useParams<RouteParams>();

  return <div>Coin: {coinId}</div>;
}
