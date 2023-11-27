import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentEmployees: [],
  deletedEmployees: [],
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.currentEmployees = action.payload;
    },
    setDeletedEmployees: (state, action) => {
      state.deletedEmployees = action.payload;
    },
    addNewEmployee: (state, action) => {
      state.currentEmployees.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      return state.filter((employee) => employee.id !== action.payload);
    },
    editEmployee: (state, action) => {
      const { id, updatedEmployee } = action.payload;
      const index = state.findIndex((employee) => employee.id === id);
      if (index !== -1) {
        state[index] = updatedEmployee;
      }
    },
  },
});

export const { setEmployees, setDeletedEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
