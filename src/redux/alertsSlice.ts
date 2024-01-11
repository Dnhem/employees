import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { produce } from "immer";
import { AlertsStatus } from "../utils/showAlertAndReset";

interface AlertsType {
  alertMsg: string;
  alertType: AlertsStatus;
}

const initialState: AlertsType = {
  alertMsg: "",
  alertType: "",
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertsType>) => {
      return produce(state, (draftState: AlertsType) => {
        draftState.alertMsg = action.payload.alertMsg;
        draftState.alertType = action.payload.alertType;
      });
    },
  },
});

export const { setAlert } = alertsSlice.actions;
export default alertsSlice.reducer;
