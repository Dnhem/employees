import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import FormerEmployees from "./pages/FormerEmployees";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/deleted" element={<FormerEmployees />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
