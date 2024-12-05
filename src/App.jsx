import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProjectRoutes from "./allrouters/ProjectRoutes";
import './App.css'
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProjectRoutes/>
        <Toaster/>
      </QueryClientProvider>
    </>
  )
}

export default App
