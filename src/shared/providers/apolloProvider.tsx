import apolloClient from "@/shared/lib/apollo";
import { ApolloProvider as ApolloProviderWrapper } from "@apollo/client";

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApolloProviderWrapper client={apolloClient}>
      {children}
    </ApolloProviderWrapper>
  );
};
