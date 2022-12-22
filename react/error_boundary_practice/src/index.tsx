import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

const queryClient = new QueryClient();

// Sentry.init({
//   dsn: 'https://830ee87e16974604b41ac474cc743499@o1415935.ingest.sentry.io/4504335944056832',
//   // integrations: [new BrowserTracing()],
//   integrations: [new Sentry.Integrations.Breadcrumbs({ console: false })],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0
// });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
