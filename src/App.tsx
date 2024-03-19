import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { FilingForm } from "./pages/FilingForm/FilingForm";
import { HomePage } from "./pages/HomePage/HomePage";
import { AdminEntrance } from "./pages/AdminEntrance/AdminEntrance";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FilingForm />} />
          <Route path="/admin" element={<AdminEntrance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
