import { setAlert } from "../redux/alertsSlice";

interface AlertsType {
  alertMsg: string;
  alertType: "error" | "info" | "success" | "";
}

export const showAlertAndReset = (
  dispatch: any,
  message: string,
  type: AlertsType["alertType"]
) => {
  dispatch(setAlert({ alertMsg: message, alertType: type }));

  setTimeout(() => {
    dispatch(setAlert({ alertMsg: "", alertType: "" }));
  }, 3000);
};
