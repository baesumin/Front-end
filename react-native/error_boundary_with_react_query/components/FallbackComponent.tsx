import React, { useEffect } from 'react';

export default function FallbackComponent({ error, resetErrorBoundary }: any) {
  useEffect(() => {
    // 에러로그
    // captureApiError(props.error);
  }, []);

  // if (!isAxiosError(error)) {
  //   throw error;
  // }
  console.log(error);
  console.log(resetErrorBoundary);

  // return <CommonErrorHandler resetErrorBoundary={resetErrorBoundary} />;
  return (
    <div>
      <p>hi</p>
      <button onClick={resetErrorBoundary}>다시 돌리기</button>
    </div>
  );
}
