import { Outlet } from 'react-router-dom';
import { ApiErrorBoundary } from './components/ApiErrorBoundary';
import Header from './components/Header';

export function Root() {
  return (
    <ApiErrorBoundary>
      <div>
        <Header />
        <Outlet />
      </div>
    </ApiErrorBoundary>
  );
}
