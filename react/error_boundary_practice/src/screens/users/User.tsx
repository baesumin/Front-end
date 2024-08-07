import React from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { users } from '../../db';

export default function User() {
  const { userId } = useParams();

  return (
    <div>
      <div>hi</div>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet
        context={{
          nameOfMyUser: users[Number(userId) - 1].name
        }}
      />
    </div>
  );
}
