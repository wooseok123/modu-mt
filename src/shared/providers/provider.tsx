"use client";

import { ApolloProvider } from "@/shared/providers/apolloProvider";
import { JotaiProvider } from "@/shared/providers/jotaiProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider>
      <JotaiProvider>{children}</JotaiProvider>
    </ApolloProvider>
  );
}
