import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./employeesSlice";
import alertsSlice from "./alertsSlice";

const store = configureStore({
  reducer: {
    employee: employeesSlice,
    alerts: alertsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
