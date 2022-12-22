import { users } from '../db';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';

export default function Home() {
  const [explode, setExplode] = React.useState(false);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setExplode((e) => !e)}>toggle explode</button>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setExplode(false)}
          resetKeys={[explode]}
        >
          {explode ? <Bomb /> : null}
        </ErrorBoundary>
      </div>
    </div>
  );
}

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Bomb() {
  throw new Error('💥 CABOOM 💥');

  return <div>hj</div>;
}
