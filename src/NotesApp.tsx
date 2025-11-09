import { RouterProvider } from "react-router";
import { ThemeProvider } from "./providers/ThemeProvider";
import { appRouter } from "./appRouter";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAuthStore } from "./auth/store/auth.store";


const queryClient = new QueryClient();

const RefreshActivity = () => {
  const refreshStatus = useAuthStore((state) => state.refreshStatus);


 useQuery({
    queryFn: refreshStatus,
    queryKey: ["refresh"],
    refetchInterval:  15 * 60 * 1000, // 15 minutes
    refetchIntervalInBackground: true,

  });

  return null;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RefreshActivity />
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;
