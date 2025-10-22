import { RouterProvider } from "react-router";
import { ThemeProvider } from "./providers/ThemeProvider";
import { appRouter } from "./appRouter";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
}

export default App;
