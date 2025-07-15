'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import List from './List';
import { Suspense } from 'react';

const queryClient = new QueryClient();

const ReactQueryPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading movies...</div>}>
        <List />
      </Suspense>
    </QueryClientProvider>
  );
};

export default ReactQueryPage;
