import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { EmployeeSchemaModel } from "../models/employeeSchema.model";

interface EmployeesContainer {
  currentEmployees: EmployeeSchemaModel[];
  deletedEmployees: EmployeeSchemaModel[];
}

const initialState: EmployeesContainer = {
  currentEmployees: [],
  deletedEmployees: [],
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<EmployeeSchemaModel[]>) => {
      state.currentEmployees = action.payload;
    },
    setDeletedEmployees: (
      state,
      action: PayloadAction<EmployeeSchemaModel[]>
    ) => {
      state.deletedEmployees = action.payload;
    },
    addNewEmployee: (state, action: PayloadAction<EmployeeSchemaModel>) => {
      state.currentEmployees.push(action.payload);
    },
  },
});

export const { setEmployees, setDeletedEmployees, addNewEmployee } =
  employeesSlice.actions;
export default employeesSlice.reducer;
