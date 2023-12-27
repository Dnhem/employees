import axios from "axios";
import { EmployeeInfo } from "../models/employeeInfo.model";

const BASE_URL = "http://142.132.229.249:3000";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getEmployees = (page: number, limit?: number) => {
  const params = {
    page,
    limit,
  };
  return instance.get("/employees", { params });
};

export const getDeletedEmployees = (page: number, limit: number) => {
  const params = {
    page,
    limit,
  };
  return instance.get("/employees/deleted", { params });
};

export const addEmployee = (employeeInfo: EmployeeInfo) =>
  instance.post("/employees", employeeInfo);

export const editEmployee = (id: string, employeeInfo: EmployeeInfo) =>
  instance.patch(`/employees/${id}`, employeeInfo);

export const deleteEmployee = (id: string) =>
  instance.delete(`/employees/soft-delete/${id}`);
