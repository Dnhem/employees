import { setAlert } from "../redux/alertsSlice";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { EmployeesContainer } from "../redux/employeesSlice";

export type AlertsStatus = "error" | "info" | "success" | "";

interface AlertsType {
  alertMsg: string;
  alertType: AlertsStatus;
}

interface RootState {
  employee: EmployeesContainer;
  alerts: AlertsType;
}

export const showAlertAndReset = (
  dispatch: ThunkDispatch<RootState, void, AnyAction>,
  message: string,
  type: AlertsType["alertType"]
) => {
  dispatch(setAlert({ alertMsg: message, alertType: type }));

  setTimeout(() => {
    dispatch(setAlert({ alertMsg: "", alertType: "" }));
  }, 3000);
};
