import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import FormerEmployees from "./pages/FormerEmployees";
import EditEmployee from "./pages/EditEmployee";
import NotFound from "./pages/NotFound";
import CustomizedSnackbars from "./components/Modal/CustomizedSnackBars";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { alertMsg, alertType } = useAppSelector((state) => state.alerts);

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/new" element={<AddEmployee />} />
        <Route path="/employees/id/:id" element={<EditEmployee />} />
        <Route path="/deleted" element={<FormerEmployees />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {alertMsg && (
        <CustomizedSnackbars alertType={alertType} alertMessage={alertMsg} />
      )}
    </div>
  );
}

export default App;
