import axios from "axios";

const baseURL = "http://142.132.229.249:3000";

const instance = axios.create({
  baseURL,
});

export const getEmployees = () => instance.get("/employees");

export const addEmployee = (employeeInfo) =>
  instance.post("/employees", employeeInfo);

export const editEmployee = (id) => instance.patch(`/employees/${id}`);

export const deleteEmployee = (id) =>
  instance.delete(`/employees/soft-delete/${id}`);
