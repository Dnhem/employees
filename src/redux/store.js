import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeesSlice";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
