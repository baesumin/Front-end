import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

interface IFollowersContext {
  nameOfMyUser: string;
}

export default function Followers() {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();

  return <div>here are {nameOfMyUser}의 followers</div>;
}
