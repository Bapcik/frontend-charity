import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import { FilingForm } from "./pages/FilingForm/FilingForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FilingForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
