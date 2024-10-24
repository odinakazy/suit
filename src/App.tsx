import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes";
function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <AppRoutes key={"all_app_routes"} />
        {/* <ToastContainer stacked /> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
