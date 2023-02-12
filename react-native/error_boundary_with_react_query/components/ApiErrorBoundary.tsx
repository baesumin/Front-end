import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackComponent from './FallbackComponent';

export const ApiErrorBoundary = ({ children }: any) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent} onReset={reset} resetKeys={[]}>
      {children}
    </ErrorBoundary>
  );
};
