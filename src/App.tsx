import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { FilingForm } from "./pages/FilingForm/FilingForm";
import { HomePage } from "./pages/HomePage/HomePage";
import { AdminEntrance } from "./pages/AdminEntrance/AdminEntrance";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdminPage } from "./pages/AdminPage/AdminPage.tsx";
import { AdminTablePage } from "./pages/AdminTablePage/AdminTablePage.tsx";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FilingForm />} />
            <Route path="/admin" element={<AdminEntrance />} />
            <Route path="/account/admin" element={<AdminPage />} />
            <Route path="/admin/table" element={<AdminTablePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
