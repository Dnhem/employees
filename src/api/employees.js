import axios from "axios";

const BASE_URL = "http://142.132.229.249:3000";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getEmployees = (page, limit) => {
  const params = {
    page,
    limit,
  };
  return instance.get("/employees", { params });
};

export const getDeletedEmployees = (page, limit) => {
  const params = {
    page,
    limit,
  };
  return instance.get("/employees/deleted", { params });
};

export const addEmployee = (employeeInfo) =>
  instance.post("/employees", employeeInfo);

export const editEmployee = (id, employeeInfo) =>
  instance.patch(`/employees/${id}`, employeeInfo);

export const deleteEmployee = (id) =>
  instance.delete(`/employees/soft-delete/${id}`);
