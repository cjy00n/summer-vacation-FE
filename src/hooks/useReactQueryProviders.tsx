"use client";

import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export default function ReactQueryProvider({
  children,
}: React.PropsWithChildren) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60, // 1시간
        cacheTime: 1000 * 60 * 10, // 10분
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>{children}</Hydrate>
    </QueryClientProvider>
  );
}
