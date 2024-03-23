import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { FilingForm } from "./pages/FilingForm/FilingForm";
import { HomePage } from "./pages/HomePage/HomePage";
import { AdminEntrance } from "./pages/AdminEntrance/AdminEntrance";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdminTablePage } from "./pages/AdminTablePage/AdminTablePage.tsx";
import PayCard from "./components/PayCard/PayCard.tsx";
import { DetailCardPage } from "./pages/DetailCardPage/DetailCardPage.tsx";
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
            <Route path="/admin/table" element={<AdminTablePage />} />

            <Route path="/pay/:id" element={<PayCard />} />
            <Route
								path="/charity/:id"
								element={<DetailCardPage />}
							/>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
