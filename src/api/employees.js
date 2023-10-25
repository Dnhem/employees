import axios from "axios";

const BASE_URL = "http://142.132.229.249:3000";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getEmployees = () => instance.get("/employees");

export const getDeletedEmployees = () => instance.get("/employees/deleted");

export const addEmployee = (employeeInfo) =>
  instance.post("/employees", employeeInfo);

export const editEmployee = (id) => instance.patch(`/employees/${id}`);

export const deleteEmployee = (id) =>
  instance.delete(`/employees/soft-delete/${id}`);
