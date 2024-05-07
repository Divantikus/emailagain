import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, FC } from "react";

const queryClient = new QueryClient();

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
