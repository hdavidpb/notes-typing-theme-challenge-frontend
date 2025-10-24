import { RouterProvider } from "react-router";
import { ThemeProvider } from "./providers/ThemeProvider";
import { appRouter } from "./appRouter";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
    <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
